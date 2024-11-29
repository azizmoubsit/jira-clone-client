import Logo from "@/components/common/logo";
import { Card, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: Readonly<AuthLayoutProps>) => {
  return (
    <div className="bg-background min-h-dvh flex flex-col items-center justify-center">
      <div className="mx-auto max-w-xl w-full">
        <Card className="border-nxone shadowx-none rounded md:rounded-xl min-h-dvh md:min-h-full">
          <CardHeader className="flex items-center justify-center pb-0">
            <Logo />
            <span className="font-semibold">
              Jira clone by{" "}
              <a
                href="https://azizmoubsit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Aziz
              </a>
            </span>
          </CardHeader>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;
