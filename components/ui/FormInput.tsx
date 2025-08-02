// If label is provided → id becomes required
type InputWithLabel = {
  name: string;
  label: string;
  id: string;
  type?: "text" | "email" | "number" | "textarea";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};

// If no label → id is optional
type InputWithoutLabel = {
  name: string;
  label?: undefined;
  id?: string;
  type?: "text" | "email" | "number" | "textarea";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
};

export type FormInputProps = InputWithLabel | InputWithoutLabel;

export default function FormInput({
  name,
  label,
  id,
  type = "text",
  placeholder = "",
  required = false,
  autoComplete,
}: FormInputProps) {
  const inputId = id || name;
  const baseClasses =
    "relative w-full p-4 border-2 border-accent text-md rounded-md transition-all focus:border-primary focus:ring-2 focus:ring-primary/30 focus:translate-x-1";

  return (
    <div className="flex flex-col gap-1">
      {/* Label (optional but recommended) */}
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Render textarea or input */}
      {type === "textarea" ? (
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={baseClasses}
          rows={4}
          required={required}
          aria-required={required}
        />
      ) : (
        <input
          type={type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={baseClasses}
          required={required}
          aria-required={required}
        />
      )}
    </div>
  );
}
