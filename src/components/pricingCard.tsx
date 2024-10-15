import { CancelIcon, TickIcon } from "../assets/icons";
import PrimaryButton from "./PrimaryButton";

interface IPriceCard {
  price: number;
  title: string;
  features: { name: string; available: boolean }[];
  button: string;
}

const PricingCard = ({ price, title, features, button }: IPriceCard) => {
  return (
    <div className="max-w-lg bg-white p-12 rounded-xl">
      {/* Pricing Header */}
      <div className="text-center border-b border-[var(--text-color-100)] py-5">
        <h3 className="font-semibold text-2xl text-[var(--placeholder)]">{title}</h3>
        <h3 className="text-5xl font-bold mt-2 text-[var(--text-color-100)]">
          GHS {price}
        </h3>
      </div>

      {/* Features List */}
      <div className="mt-6">
        <ul className="space-y-6">
          {features.map((feature, index) => (
            <li key={index} className="flex justify-between">
              <span>{feature.name}</span>
              {/* Conditionally Render Icon */}
              <span>{feature.available ? <TickIcon /> : <CancelIcon />}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div className="text-center px-12 pt-12">
        <PrimaryButton
          title={button}
          containerStyles="text-white h-14 rounded-xl min-w-[210px] transition-all duration-300 px-12"
        />
      </div>
    </div>
  );
};

export default PricingCard;
