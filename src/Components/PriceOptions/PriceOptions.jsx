import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 49.99,
      features: [
        "Access to cardio and weightlifting areas",
        "Unlimited gym usage",
        "Locker room access",
        "Group fitness classes (limited)",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Access to all gym facilities",
        "Unlimited gym usage",
        "Locker room access",
        "Personalized fitness assessment",
      ],
    },
    {
      id: 3,
      name: "Student Membership",
      price: 29.99,
      features: [
        "Access to cardio and weightlifting areas",
        "Unlimited gym usage during non-peak hours",
        "Locker room access",
        "Student ID required",
      ],
    },
    {
      id: 4,
      name: "Family Membership",
      price: 109.99,
      features: [
        "Access for two adults and two children",
        "Unlimited gym usage",
        "Locker room access",
        "Discounted group fitness classes for family",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl text-center my-5 text-white">Best Prices in the Town</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
        PriceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))
        }
      </div>
    </div>
  );
};

export default PriceOptions;
