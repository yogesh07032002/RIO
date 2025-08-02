import React from "react";

export const Products = () => {
  const productList = [
    {
      name: "Humic Gold",
      image: "/images/product1.jpg",
      category: "Root Enhancer",
      desc: "HUMIC GOLD is a root enhancer containing shiny crystals. It increases root mass, fruit yield, and biomass of the plant. Reduces fertilizer doses by 20–25% and improves soil porosity, aeration, and water retention.",
      details: [
        "Enhances root growth and biomass",
        "Improves soil porosity and water retention",
        "Reduces fertilizer need by 20–25%",
      ],
      packing: "100gm, 250gm, 500gm, 1kg",
      dose: "Foliar Spray: 1.25–2.5 gm/ltr | Drip: 500gm–1kg/acre",
    },
    {
      name: "Riovita",
      image: "/images/product2.jpg",
      category: "Yield Enhancer",
      desc: "Yield enhancer with humic, seaweed, amino acid, fulvic acid, and trace elements. Increases biomass, yield, root mass, and improves soil fertility.",
      details: [
        "Contains Humic, Seaweed, Amino & Fulvic Acid",
        "Improves root & plant biomass",
        "Boosts microbial population in soil",
      ],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2.5–5 ml/ltr",
    },
    {
      name: "Rio Bahaar",
      image: "/images/product3.jpg",
      category: "Flowering Stimulant",
      desc: "Organic compound used as a plant energizer, flowering stimulant, and yield enhancer. Helps convert flowers to fruits.",
      details: [
        "Boosts flowering and fruit set",
        "Plant energizer with nutrients",
        "Improves overall yield",
      ],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2.5–5 ml/ltr",
    },
    {
      name: "Rio Neem Kadu",
      image: "/images/product4.jpg",
      category: "Insecticide",
      desc: "Makes plants bitter to pests. Controls a wide range of pests including aphids, whiteflies, spidermites, and scale insects.",
      details: [
        "Natural neem extract",
        "Effective against common pests",
        "Safe for crops & soil microbes",
      ],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2–5 ml/ltr",
    },
    {
      name: "Rio Potash",
      image: "/images/product5.jpg",
      category: "Organic Potash",
      desc: "Essential macro nutrient for photosynthesis, water balance, enzyme activation, and fruit quality.",
      details: [
        "Improves sugar content and fruit size",
        "Enhances cell wall development",
        "Supports enzyme activation",
      ],
      packing: "500ml, 1 liter",
      dose: "2.5–5 ml/ltr | Drip: 500ml–1 liter/acre",
    },
    {
      name: "Prabal-60",
      image: "/images/product6.jpg",
      category: "Amino Acid",
      desc: "Stimulates plant growth and supports stress tolerance, disease resistance, and protein synthesis.",
      details: [
        "Promotes nutrient uptake",
        "Improves fruit quality",
        "Conditions soil and boosts resistance",
      ],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2.5–5 ml/ltr",
    },
    {
      name: "Rollex",
      image: "/images/product7.jpg",
      category: "Organic Extract",
      desc: "Yield enhancer that improves soil aeration and water retention while increasing microflora.",
      details: [
        "Boosts biomass and root development",
        "Reduces fertilizer requirement",
        "Improves soil structure",
      ],
      packing: "1000ml, 2.5 liter",
      dose: "2.5–5 ml/ltr | Drip: 2–2.5 liter/acre",
    },
    {
      name: "Shine",
      image: "/images/product8.jpg",
      category: "Organic Extract",
      desc: "Same as Rollex with emphasis on yield and root mass. Enhances soil porosity and microbial life.",
      details: [
        "Increases fruit yield",
        "Supports healthy soil ecology",
        "Improves nutrient retention",
      ],
      packing: "1000ml, 2.5 liter",
      dose: "2.5–5 ml/ltr | Drip: 2–2.5 liter/acre",
    },
    {
      name: "Tandav",
      image: "/images/product9.jpg",
      category: "Plant Protector",
      desc: "Protects against mites and thrips in crops like cotton, paddy, and chillies.",
      details: [
        "Effective on ornamental and horticulture crops",
        "Controls mites and thrips",
      ],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2 ml/ltr",
    },
    {
      name: "Pralay",
      image: "/images/product10.jpg",
      category: "Plant Protector",
      desc: "Used for effective control of mites and thrips. Ideal for a wide range of crops.",
      details: ["Powerful protection", "Suitable for major crops"],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2 ml/ltr",
    },
    {
      name: "Spector",
      image: "/images/product11.jpg",
      category: "Plant Protector",
      desc: "Effective against all stages of larva in cotton, paddy, and vegetable crops.",
      details: ["Long-lasting larva control", "Protects against chewing pests"],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2 ml/ltr",
    },
    {
      name: "Hunter",
      image: "/images/product12.jpg",
      category: "Plant Protector",
      desc: "Protects all stages of larva, suitable for cotton, paddy, chillies, and other vegetables.",
      details: ["Targets larva lifecycle", "Broad crop application"],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2 ml/ltr",
    },
    {
      name: "Hydra-1",
      image: "/images/product13.jpg",
      category: "Plant Protector",
      desc: "Powerful plant protector against larva, effective in low doses.",
      details: ["Strong impact at 1 ml/ltr", "Suitable for many crops"],
      packing: "20ml, 50ml, 100ml, 250ml",
      dose: "1 ml/ltr",
    },
    {
      name: "Lexica",
      image: "/images/product14.jpg",
      category: "Plant Protector",
      desc: "Effective control of aphids (mava) in major field and vegetable crops.",
      details: ["Controls sap-sucking pests", "Enhances plant recovery"],
      packing: "100ml, 250ml, 500ml, 1000ml",
      dose: "2 ml/ltr",
    },
    {
      name: "Bridge",
      image: "/images/product15.jpg",
      category: "Micronutrient Mixture",
      desc: "Essential micronutrients supporting photosynthesis and plant development.",
      details: ["Improves yield and growth", "Optimizes photosynthesis"],
      packing: "5kg",
      dose: "2.5–5kg/acre",
    },
    {
      name: "Silwet",
      image: "/images/product16.jpg",
      category: "Silicon-Based Spreader",
      desc: "Non-toxic spray adjuvant used with various agrochemicals.",
      details: ["Improves chemical absorption", "Silicon-based, safe and effective"],
      packing: "50ml, 100ml, 250ml",
      dose: "2.5–5 ml/12 liter of water",
    },
    {
      name: "Annapurna-DF",
      image: "/images/product17.jpg",
      category: "Micronutrient Mixture",
      desc: "Micronutrient supplement to improve plant growth and productivity.",
      details: ["Boosts photosynthesis", "Ensures optimal crop development"],
      packing: "5 liter",
      dose: "2.5–5 ml/ltr | Drip: 2.5–5 liter/acre",
    },
    {
      name: "Riofert-DF",
      image: "/images/product18.jpg",
      category: "Micronutrient Mixture",
      desc: "Essential nutrients to optimize growth and physiological activity.",
      details: ["Improves yields", "Promotes plant health"],
      packing: "5 liter",
      dose: "2.5–5 ml/ltr | Drip: 2.5–5 liter/acre",
    },
  ];

  const whatsappBaseUrl = "https://wa.me/917517411590?text=";

  return (
    <section className="bg-[#E3F2FD] text-[#1A237E] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0288D1] mb-4">Our Products</h1>
          <p className="text-lg text-[#1A237E] max-w-2xl mx-auto">
            Explore our eco-friendly and scientifically formulated products that empower sustainable farming across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productList.map((product, index) => {
            const message = `Hello, I'm interested in your product: ${product.name}. Please provide more details.`;
            const whatsappLink = `${whatsappBaseUrl}${encodeURIComponent(message)}`;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-[#81D4FA] shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:scale-[1.015]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-contain rounded-md mb-4 border border-[#E3F2FD]"
                />
                <h3 className="text-xl font-semibold text-[#0288D1] mb-1">
                  {product.name}
                </h3>
                <p className="text-xs italic text-gray-500 mb-2">{product.category}</p>
                <p className="text-sm text-[#37474F] mb-3">{product.desc}</p>

                <ul className="text-sm text-left list-disc list-inside text-[#37474F] space-y-1 mb-3">
                  {product.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <p className="text-sm text-[#37474F] mb-1">
                  <span className="font-semibold text-[#1A237E]">Packing:</span> {product.packing}
                </p>
                <p className="text-sm text-[#37474F] mb-3">
                  <span className="font-semibold text-[#1A237E]">Dose:</span> {product.dose}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-2 px-4 py-2 bg-[#F57C00] text-white rounded-full hover:bg-[#ef6c00] transition-all duration-300 shadow-md">
                    Enquire Now
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
