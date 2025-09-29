import clsx from 'clsx';
import Link from 'next/link';

const TopTitle = ({
  title,
  text,
  btnText,
  href = '#',
  align = 'left', // left or center
  buttonVariant, // solid | outline | none
  buttonColor = '#CF9645', // default color
}) => {
  const isCenter = align === 'center';
  const finalVariant = buttonVariant || 'solid';

  // Tailwind dynamic color using CSS variable
  const buttonClasses = clsx(
    'text-xl font-medium px-8 py-4 rounded flex justify-center items-center gap-2 transition-colors duration-200 capitalize',
    {
      // Solid variant
      'text-white bg-[var(--btn-color)] hover:opacity-90':
        finalVariant === 'solid',
      // Outline variant
      'border text-[var(--btn-color)] border-[var(--btn-color)] hover:bg-[var(--btn-color)] hover:text-white':
        finalVariant === 'outline',
    }
  );

  return (
    <div className="mb-[60px]">
      <div
        className={clsx('flex gap-16', {
          'items-center justify-center text-center flex-col': isCenter,
          'items-end justify-between': !isCenter,
        })}
      >
        <div className={clsx({ 'max-w-[900px]': !isCenter })}>
          <h2 className="text-[#08001E] text-[48px] font-bold capitalize">
            {title}
          </h2>
          {text && (
            <p className="text-[#4C4C4C] text-lg font-normal pt-4">{text}</p>
          )}
        </div>

        {btnText && finalVariant !== 'none' && (
          <Link
            href={href}
            className={buttonClasses}
            style={{ '--btn-color': buttonColor }}
          >
            {btnText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopTitle;
