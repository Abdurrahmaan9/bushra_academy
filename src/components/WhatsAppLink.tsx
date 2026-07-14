"use client";

type Props = {
  phone: string;
  message: string;
  children: React.ReactNode;
  className?: string;
};

export default function WhatsAppLink({
  phone,
  message,
  children,
  className,
}: Props) {
  function handleWhatsApp() {
    const encoded = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `whatsapp://send?phone=${phone}&text=${encoded}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;

    window.open(url, "_blank");
  }

  return (
    <button type="button" onClick={handleWhatsApp} className={className}>
      {children}
    </button>
  );
}
