"use client";
import React from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const TrialPage = () => {
  const { toast } = useToast();
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export default TrialPage;
