// TENIS
import swiftRunImg from "../assets/TenisSwiftRun.png";
import velocityXImg from "../assets/TenisVelocityX.png";
import mountainGoatImg from "../assets/TenisMountainGoat.png";

// ROPA
import aeroFitImg from "../assets/CamisetaAeroFit.png";
import coreSupportImg from "../assets/MallasCoreSupport.png";
import windBreakerImg from "../assets/RompevientosWindBreaker.png";

// ACCESORIOS
import runTrackProImg from "../assets/RelojRunTrackPro.png";
import h2oBeltImg from "../assets/H2OBelt.png";
import nightRunnerImg from "../assets/LinternaNightRunner.png";

// NUTRICIÓN
import hydrateMaxImg from "../assets/HydrateMax.png";
import fastFuelImg from "../assets/GelesFastFuelPack.png";
import rechargeBarImg from "../assets/BarrasRechargeBar.png";


const products = [
  {
    id: "1",
    title: 'Tenis de Entrenamiento "SwiftRun"',
    category: "tenis",
    price: 120.0,
    stock: 10,
    description: "Tenis ligeros y cómodos, ideales para distancias cortas y entrenamiento diario.",
    image: "/src/assets/TenisSwiftRun.png"
  },
  {
    id: "5",
    title: 'Tenis de Competencia "Velocity X"',
    category: "tenis",
    price: 180.0,
    stock: 7,
    description: "Máximo retorno de energía y ligereza, diseñados para la velocidad en el día de la carrera.",
    image: "/src/assets/TenisVelocityX.png"
  },
  {
    id: "6",
    title: 'Tenis Trail "Mountain Goat"',
    category: "tenis",
    price: 155.0,
    stock: 12,
    description: "Zapatillas con agarre robusto y amortiguación para senderos y terrenos irregulares.",
    image: "/src/assets/TenisMountainGoat.png"
  },
  {
    id: "2",
    title: 'Camiseta Técnica "AeroFit"',
    category: "ropa",
    price: 45.0,
    stock: 15,
    description: "Camiseta de secado rápido con tecnología de ventilación. Perfecta para climas cálidos.",
    image: "/src/assets/CamisetaAeroFit.png"
  },
  {
    id: "7",
    title: 'Mallas de Compresión "Core Support"',
    category: "ropa",
    price: 70.0,
    stock: 20,
    description: "Mallas con soporte muscular avanzado para reducir la fatiga en carreras largas.",
    image: "/src/assets/MallasCoreSupport.png"
  },
  {
    id: "8",
    title: 'Chamarra Rompevientos "WindBreaker"',
    category: "ropa",
    price: 95.0,
    stock: 8,
    description: "Chaqueta ultraligera y plegable, resistente al viento y lluvia ligera.",
    image: "/src/assets/RompevientosWindBreaker.png"
  },
  {
    id: "3",
    title: 'Reloj GPS Avanzado "RunTrack Pro"',
    category: "accesorios",
    price: 280.0,
    stock: 5,
    description: "Reloj con GPS, medición de ritmo cardíaco y planificación de rutas avanzadas.",
    image: "/src/assets/RelojRunTrackPro.png"
  },
  {
    id: "9",
    title: 'Riñonera Hidratación "H2O Belt"',
    category: "accesorios",
    price: 35.0,
    stock: 25,
    description: "Cinturón ajustable con espacio para bidones de agua y geles energéticos.",
    image: "/src/assets/H2OBelt.png"
  },
  {
    id: "10",
    title: 'Linterna Frontal LED "NightRunner"',
    category: "accesorios",
    price: 50.0,
    stock: 18,
    description: "Lámpara potente y ligera, esencial para carreras o entrenamientos nocturnos.",
    image: "/src/assets/LinternaNightRunner.png"
  },
  {
    id: "4",
    title: 'Bebida Isotónica "Hydrate Max"',
    category: "nutricion",
    price: 3.5,
    stock: 50,
    description: "Fórmula de electrolitos para una hidratación óptima durante carreras largas.",
    image: "/src/assets/HydrateMax.png"
  },
  {
    id: "11",
    title: 'Geles Energéticos "FastFuel Pack"',
    category: "nutricion",
    price: 25.0,
    stock: 40,
    description: "Pack de 10 geles de rápida absorción con carbohidratos para energía instantánea.",
    image: "/src/assets/GelesFastFuelPack.png"
  },
  {
    id: "12",
    title: 'Barras de Recuperación "Recharge Bar"',
    category: "nutricion",
    price: 4.0,
    stock: 60,
    description: "Barras ricas en proteínas y nutrientes para una recuperación muscular efectiva post-carrera.",
    image: "/src/assets/BarrasRechargeBar.png"
  }
];

// Simula petición asíncrona con Promise
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 600);
  });
}

// Simula fetch de un producto por ID
export function fetchProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = products.find((p) => p.id === id);
      if (item) resolve(item);
      else reject(new Error("Producto no encontrado"));
    }, 600);
  });
}
