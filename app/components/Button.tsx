import Link from "next/link";

const variantStyles = {
    primary:
        "inline-flex items-center justify-center rounded-lg border-0 bg-ctp-mauve px-5 py-3 font-medium text-ctp-base shadow-[0_4px_0_0_var(--ctp-surface0)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--ctp-surface0)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--ctp-surface0)]",
    secondary:
        "inline-flex items-center justify-center rounded-lg border-2 border-ctp-surface1 bg-transparent px-5 py-3 font-medium text-ctp-text shadow-[0_4px_0_0_var(--ctp-crust)] transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-mauve hover:shadow-[0_6px_0_0_var(--ctp-crust)] hover:text-ctp-mauve active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--ctp-crust)]",
} as const;

type ButtonVariant = keyof typeof variantStyles;

type BaseProps = {
    variant: ButtonVariant;
    children: React.ReactNode;
    className?: string;
};

type ButtonAsButton = BaseProps & {
    href?: never;
    external?: never;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

type ButtonAsLink = BaseProps & {
    href: string;
    external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
    return "href" in props && props.href !== undefined;
}

export function Button(props: ButtonProps) {
    const { variant, children, className = "", ...rest } = props;
    const classes = `${variantStyles[variant]} ${className}`.trim();

    if (isLinkProps(props)) {
        const { href, external, ...linkRest } = props;
        const isInternal = href.startsWith("/") || href.startsWith("#");

        if (isInternal && !external) {
            return (
                <Link href={href} className={classes} {...linkRest}>
                    {children}
                </Link>
            );
        }

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                {...linkRest}
            >
                {children}
            </a>
        );
    }

    const buttonRest = rest as Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        keyof BaseProps
    >;
    const { type = "button", ...attrs } = buttonRest;
    return (
        <button
            type={type as "button" | "submit" | "reset"}
            className={classes}
            {...attrs}
        >
            {children}
        </button>
    );
}
