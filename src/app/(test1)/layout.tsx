import Header from "@/componenet/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     
          <>
          <Header />
          {children}
          </>
      
    );
  }