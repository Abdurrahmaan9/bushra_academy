export const ORG_EMAIL = "Bushraa786academy@gmail.com";

export const EXPERIENCE_LABELS: Record<string, string> = {
  beginner: "Beginner — New to Tajweed",
  some: "Some experience — Can read with basic Tajweed",
  intermediate: "Intermediate — Comfortable with most rules",
  advanced: "Advanced — Looking to complete Khatm",
};

export type EnrollmentPayload = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
};

export async function submitEnrollment(
  data: EnrollmentPayload
): Promise<{ success: boolean; message?: string }> {
  // Local Next.js returns 200 for POST "/" even though Netlify never receives it
  if (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1")
  ) {
    return {
      success: false,
      message:
        "Form sending only works on the live Netlify site. Please submit from your deployed URL.",
    };
  }

  const experienceLabel =
    EXPERIENCE_LABELS[data.experience] ?? data.experience;

  const params = new URLSearchParams({
    "form-name": "enrollment",
    name: data.name,
    email: data.email,
    phone: data.phone || "Not provided",
    experience: experienceLabel,
    message: data.message || "(none provided)",
    "bot-field": "",
  });

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    return { success: true };
  } catch {
    return {
      success: false,
      message: `Unable to send your request right now. Please try again or email ${ORG_EMAIL}.`,
    };
  }
}
