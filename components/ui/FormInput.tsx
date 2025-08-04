// If label is provided → id becomes required
type InputWithLabel = {
  name: string;
  label: string;
  id: string;
  type?: "text" | "email" | "number" | "textarea" | "tel";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rows?: number;
  error?: string;
  value?: string;
};

// If no label → id is optional
type InputWithoutLabel = {
  name: string;
  label?: undefined;
  id?: string;
  type?: "text" | "email" | "number" | "textarea" | "tel";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rows?: number;
  error?: string;
  value?: string;
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
  onChange,
  rows = 4,
  error,
  value,
}: FormInputProps) {
  const inputId = id || name;
  const baseClasses = `relative w-full p-3 border-2 text-md rounded-md transition-all ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
      : "border-accent focus:border-accent focus:ring-2 focus:ring-accent/30"
  } focus:translate-x-1`;

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
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={baseClasses}
          rows={rows}
          required={required}
          aria-required={required}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={inputId}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={baseClasses}
          required={required}
          aria-required={required}
          onChange={onChange}
        />
      )}

      {/* Error message */}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
