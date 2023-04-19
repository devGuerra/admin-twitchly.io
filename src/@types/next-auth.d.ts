import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      avatar: string;
      slug: string;
      subcription_active: boolean;
      description: string;
    }
  };
}