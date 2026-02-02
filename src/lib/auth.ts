import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "nomadapprentice" | "nomadpreneur" | "company" | "admin";
    } & DefaultSession["user"];
  }

  interface User {
    role: "nomadapprentice" | "nomadpreneur" | "company" | "admin";
  }
}

// In-memory user store (for demo - replace with real database)
const users: Array<{
  id: string;
  email: string;
  password: string;
  name: string;
  role: "nomadapprentice" | "nomadpreneur" | "company" | "admin";
}> = [];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = users.find((u) => u.email === credentials.email);

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "nomadapprentice" | "nomadpreneur" | "company" | "admin";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});

// Helper function to register new users
export async function registerUser(data: {
  email: string;
  password: string;
  name: string;
  role: "nomadapprentice" | "nomadpreneur" | "company";
}) {
  // Check if user already exists
  const existingUser = users.find((u) => u.email === data.email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Create user
  const newUser = {
    id: Math.random().toString(36).substring(7),
    email: data.email,
    password: hashedPassword,
    name: data.name,
    role: data.role,
  };

  users.push(newUser);
  return { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role };
}

// Get dashboard path based on role
export function getDashboardPath(role: string): string {
  switch (role) {
    case "nomadapprentice":
      return "/dashboard/apprentice";
    case "nomadpreneur":
      return "/dashboard/preneur";
    case "company":
      return "/dashboard/company";
    case "admin":
      return "/admin";
    default:
      return "/dashboard";
  }
}
