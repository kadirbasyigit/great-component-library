type StarIconProps = {
  size?: '20' | '24';
  className?: string;
};

const StarIcon = ({ size = '20', className }: StarIconProps) => {
  const sizeNum = parseInt(size);

  return (
    <svg
      width={sizeNum}
      height={sizeNum}
      viewBox="0 1 20 20"
      fill="none"
      stroke="currentColor"
      className={className}
      style={{ display: 'block' }}
    >
      <path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 14.51l-4.77 2.21.91-5.33L2.27 7.62l5.34-.78L10 2z" />
    </svg>
  );
};

export default StarIcon;
