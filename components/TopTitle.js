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
    'text-lg md:text-xl lg:text-2xl font-medium px-6 md:px-8 py-3 md:py-4 rounded flex justify-center items-center gap-2 transition-colors duration-200 capitalize w-full sm:w-auto',
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
    <div className="mb-8 md:mb-12 lg:mb-[60px]">
      <div
        className={clsx('flex gap-4 md:gap-8 lg:gap-16', {
          'items-center justify-center text-center flex-col': isCenter,
          'flex-col sm:flex-row items-start sm:items-end justify-between':
            !isCenter,
        })}
      >
        <div
          className={clsx('w-full', {
            'max-w-full': isCenter,
            'sm:max-w-[600px] lg:max-w-[900px]': !isCenter,
          })}
        >
          <h2 className="text-[#08001E] text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold capitalize leading-tight">
            {title}
          </h2>
          {text && (
            <p className="text-[#4C4C4C] text-base md:text-lg lg:text-xl font-normal pt-2 md:pt-3 lg:pt-4 leading-relaxed">
              {text}
            </p>
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
