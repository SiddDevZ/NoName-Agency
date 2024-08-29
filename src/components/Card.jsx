import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-[27px] flex px-6 relative max-w-[458px] min-h-[246px] py-2">
      <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-[#FCFCFC] shadow-[0_2px_4px_rgba(0,41,255,0.25)] rounded-[20px] px-5 py-3 ">
        <img src={imageUrl} alt="" className="w-8 h-8" />
      </div>
      <div className="space-y-4 pt-12 font-[poppins]">
        <h2 className="text-[32px]">{title}</h2>
        <p className="text-[#7e7e7e] text-[16px]">{description}</p>
      </div>
    </div>
  );
};

const cardsData = [
  {
    imageUrl: './icon-park_attention.png',
    title: 'Outdated design',
    description:
      'Outdated websites fail to capture users attention, and engage them, often appearing less credible and less appealing.',
  },
  {
    imageUrl: './fxemoji_moneybag.png',
    title: 'Costly Developers',
    description:
      'With an average developer salary of $110,585 in USA, costs can be high. We provide the same quality work for a fraction of the price.',
  },
  {
    imageUrl: './time.png',
    title: 'Slow Development',
    description:
      'Delays can impact your financial goals. Our team of developers worldwide speeds up the process, ensuring faster results.',
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
