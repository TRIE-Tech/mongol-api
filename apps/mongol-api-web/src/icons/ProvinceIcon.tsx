import { BaseIconProps } from './types';

export const ProvinceIcon = (props: BaseIconProps) => {
  const { width, height, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={84 || width}
      height={76 || height}
      fill="none"
      {...props}
    >
      <path
        fill={'#D0D7E2' || color}
        d="M68.12 4.16c2.742 2.151 4.632 5.624 5.405 9.262.094.03.185.066.273.109l8.59 3.973A2.768 2.768 0 0 1 84 20.011v51.942a2.794 2.794 0 0 1-3.57 2.663l-23.81-6.72-28.308 7.803a2.83 2.83 0 0 1-1.558-.017l-24.763-7.37A2.772 2.772 0 0 1 0 65.664V12.792c0-1.848 1.798-3.176 3.591-2.655l23.948 6.976 12.172-3.725c.168-.05.339-.085.512-.105.47-2.755 1.785-5.401 3.99-7.98C46.83 2.237 51.421.439 55.893.225c4.642-.222 8.186.769 12.223 3.931l.004.005ZM5.599 16.5v47.103l20.454 6.086V22.452L5.599 16.5Zm34.477 2.579-8.425 2.575v47.371l21.273-5.854V49.33c0-1.528 1.256-2.767 2.802-2.767 1.545 0 2.797 1.239 2.797 2.772v13.343L78.4 68.286V21.771l-4.704-2.184c-.08.462-.18.916-.306 1.357a25.763 25.763 0 0 1-4.511 8.866L58.477 42.8a2.814 2.814 0 0 1-4.507-.155l-9.723-14.082c-1.604-2.243-2.73-4.242-3.364-6.032a15.724 15.724 0 0 1-.807-3.452ZM56.162 5.761c-3.049.147-6.182 1.373-7.673 3.116-1.793 2.1-2.675 4.066-2.852 6.057-.21 2.398-.067 4.09.53 5.766.44 1.24 1.318 2.81 2.675 4.704l7.606 11.013L64.47 26.4a20.21 20.21 0 0 0 3.532-6.96c1.008-3.528-.512-8.71-3.36-10.937-2.919-2.289-5.124-2.906-8.475-2.742h-.005Zm.58 2.927c4.637 0 8.4 3.717 8.4 8.304a8.352 8.352 0 0 1-8.4 8.303c-4.637 0-8.4-3.717-8.4-8.303 0-4.587 3.763-8.304 8.4-8.304Zm0 5.536a2.787 2.787 0 0 0-2.801 2.768c0 1.528 1.255 2.767 2.801 2.767a2.784 2.784 0 0 0 2.797-2.772 2.785 2.785 0 0 0-2.797-2.763Z"
      />
    </svg>
  );
};