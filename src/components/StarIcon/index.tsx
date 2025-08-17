type StarIconProps = {
  size?: '16' | '20';
  className?: string;
};

const StarIcon = ({ size = '16', className }: StarIconProps) => {
  const sizes = {
    '16': { width: 16, height: 16 },
    '20': { width: 20, height: 20 },
  };

  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.464 8.272L12 18.896l-7.4 4.51 1.464-8.272L0 9.306l8.332-1.151L12 .587z" />
    </svg>
  );
};

export default StarIcon;
