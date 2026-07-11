"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useTranslation } from "@/hooks/useTranslation";
import type { LeadFormData } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type FormValues = {
  name: string;
  email: string;
  goal: string;
  phone?: string;
};

async function submitLead(data: LeadFormData): Promise<{ success: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 1800));
  return { success: true };
}

export function LeadForm() {
  const { t } = useTranslation();

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.form.errorName),
        email: z.email(t.form.errorEmail),
        goal: z.string().min(1, t.form.errorGoal),
        phone: z.string().optional(),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { goal: "" },
  });

  const mutation = useMutation({
    mutationFn: submitLead,
    onSuccess: () => reset(),
  });

  const onSubmit = (data: FormValues) => mutation.mutate(data);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {mutation.isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30">
              <CheckCircle className="w-8 h-8 text-[#CCFF00]" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white font-heading">
              {t.form.successTitle}
            </h3>
            <p className="text-[#888888] text-sm max-w-xs">
              {t.form.successText}
            </p>
            <button
              onClick={() => mutation.reset()}
              className="mt-2 text-xs text-[#CCFF00] uppercase tracking-widest hover:underline"
            >
              {t.form.submitAnother}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                id="name"
                label={t.form.name}
                placeholder={t.form.namePlaceholder}
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                id="email"
                label={t.form.email}
                type="email"
                placeholder={t.form.emailPlaceholder}
                {...register("email")}
                error={errors.email?.message}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Controller
                name="goal"
                control={control}
                render={({ field }) => (
                  <Select
                    id="goal"
                    label={t.form.goal}
                    options={[...t.goals]}
                    placeholder={t.form.goalPlaceholder}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={errors.goal?.message}
                  />
                )}
              />
              <Input
                id="phone"
                label={t.form.phone}
                type="tel"
                placeholder={t.form.phonePlaceholder}
                {...register("phone")}
              />
            </div>

            {mutation.isError && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-400 text-center"
              >
                {t.form.errorGeneric}
              </motion.p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={mutation.isPending}
              className="mt-2 w-full sm:w-auto self-start"
            >
              {mutation.isPending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t.form.processing}
                </span>
              ) : (
                t.form.submit
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
