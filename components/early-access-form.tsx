"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, Loader2 } from "lucide-react";

export function EarlyAccessForm() {
  const t = useTranslations("earlyAccessPage.form");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      await fetch("https://formspree.io/f/xjggrlqy", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      router.push("/early-access/thank-you");
    } catch (error) {
      console.error("Submission error", error);
      // Still redirect on error for demo purposes
      router.push("/early-access/thank-you");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          {t("fullName")}
        </Label>
        <Input
          id="name"
          name="name"
          placeholder={t("fullNamePlaceholder")}
          required
          className="h-12 bg-background"
        />
      </div>

      {/* Business Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          {t("businessEmail")}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder={t("businessEmailPlaceholder")}
          required
          className="h-12 bg-background"
        />
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <Label htmlFor="company" className="text-sm font-medium">
          {t("companyName")}
        </Label>
        <Input
          id="company"
          name="company"
          placeholder={t("companyNamePlaceholder")}
          required
          className="h-12 bg-background"
        />
      </div>

      {/* Two columns for selects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Number of Employees */}
        <div className="space-y-2">
          <Label htmlFor="employees" className="text-sm font-medium">
            {t("employees")}
          </Label>
          <Select name="employees" required>
            <SelectTrigger className="h-12 bg-background w-full">
              <SelectValue placeholder={t("employeesPlaceholder")} />
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={4}
              className="bg-background border border-border"
            >
              <SelectItem value="<50">{t("employeesLessThan50")}</SelectItem>
              <SelectItem value="50-200">{t("employees50To200")}</SelectItem>
              <SelectItem value="200+">{t("employeesMoreThan200")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Current ERP */}
        <div className="space-y-2">
          <Label htmlFor="currentErp" className="text-sm font-medium">
            {t("currentErp")}
          </Label>
          <Select name="currentErp">
            <SelectTrigger className="h-12 bg-background w-full">
              <SelectValue placeholder={t("currentErpPlaceholder")} />
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={4}
              className="bg-background border border-border"
            >
              <SelectItem value="sap">{t("currentErpOptions.sap")}</SelectItem>
              <SelectItem value="oracle">
                {t("currentErpOptions.oracle")}
              </SelectItem>
              <SelectItem value="dynamics">
                {t("currentErpOptions.dynamics")}
              </SelectItem>
              <SelectItem value="odoo">
                {t("currentErpOptions.odoo")}
              </SelectItem>
              <SelectItem value="custom">
                {t("currentErpOptions.custom")}
              </SelectItem>
              <SelectItem value="other">
                {t("currentErpOptions.other")}
              </SelectItem>
              <SelectItem value="none">
                {t("currentErpOptions.none")}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          {t("message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("messagePlaceholder")}
          rows={4}
          className="bg-background resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-14 text-base font-semibold shadow-lg shadow-primary/25"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t("submitting")}
          </>
        ) : (
          <>
            {t("submit")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
