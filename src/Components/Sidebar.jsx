import { useState } from "react";

const categories = [
  {
    name: "Monitorlar",
    items: ["Monitorlar", "Monitorlar ucin berkidijiler we goyujylar"],
  },
  {
    name: "PK Duzujileri",
    items: [
      "PK ucin Korpuslar",
      "Esasy platalar",
      "Prossessorlar (CPU)",
      "Yadyn Moduly (RAM)",
      "Wido kartalar",
      "Tizlendiriji gaty disk (SSD)",
      "Icki gaty diskler (HDD)",
      "Optiki toplayjylar (DWD RW)",
      "Tok upjuncilik blogy",
      "Howa we suwly sowadyjylar",
      "Korpslar ucin aksessuarlar",
      "Termo interfeysleri",
    ],
  },
  {
    name: "Periferiyalar",
    items: [
      "Esbaplar priferiya ucin",
      "Kompyuter sycanjygy",
      "Klawituralar",
      "Sycanjyk ucin halycalar",
      "Gulaklyklar",
      "Kolonkalar we saundbarlar",
      "Portatiw kolonkalary",
      "Web kamera",
      "Mikrofonlar",
      "Oyun konsollary we esbaplar",
      "Oyun ucin kontrollerler",
      "Wideo oyunlary",
      "Grafiki plansetler",
      "Dok stansiyalar we HUB-lar",
    ],
  },
  {
    name: "Toplayjylar",
    items: [
      "Dasky gaty diskler",
      "Gaty diskler ucin stansiyalar we korpuslar",
      "Fles toplayjy (USB)",
      "Yat karty (SD)",
      "Kartriderler",
    ],
  },
  {
    name: "Monoblok we PK",
    items: ["Monobloklar", "Brend Kompyuterler"],
  },
  {
    name: "Noutbuklar we beylekiler",
    items: [
      "Noutbuklar",
      "Sumkalar we ryuzaklar",
      "Stendler we esbaplar",
      "Batareyler",
      "Zaryad berijiler",
      "Yadyn moduly",
      "Gaty diskler",
      "Optiki toplayjylar DWD RW",
      "Ekranlar",
      "Klawituralar",
      "Klawiatura ucin nakleykalar",
    ],
  },
  {
    name: "Mobil Periferiyalary",
    items: [
      "Telefon ucin zaryad berijiler",
      "Telefon ucin kabeller",
      "Portatiw batareyler",
      "Podstawkalar we saklayjylar",
      "Sumkalar we keysler",
      "Arassalayjy serisdeler",
      "Durli mobil pereferiyalary",
    ],
  },
  {
    name: "Printerler we beylekiler",
    items: [
      "Lazer printerler",
      "Injekt printerler",
      "Kopiya aparatlary",
      "Skanerler",
      "Oy we ofis ucin telefonlar",
      "Faks aparatlary",
      "Proyektorlar we duzujiler",
      "Kagyz uweyji",
      "Laminatorlar",
      "Kanselyariya",
      "Sarp edilyan harytlar",
    ],
  },
  {
    name: "Tor enjamlary",
    items: [
      "Routerler",
      "Simsiz guyclendirijiler",
      "Tor adapteri we platalar",
      "Swicler, konwerterler we beylekiler",
      "Tor kabeli",
      "Testerler we gurallar",
    ],
  },
  {
    name: "Howpsuzlyk ulgamy",
    items: ["Gozegcilik kameralary", "Elektron gulplar"],
  },
  {
    name: "Awtomatizasiya",
    items: [
      "POS kompyuterleri we beylekiler",
      "Barkod we cek printerler",
      "Barkod skanerleri",
      "Pul sanayjylar",
      "Pul gutusy",
      "Sarp edilyan harytlar",
    ],
  },
  {
    name: "Tok sazlayjy we UPS",
    items: [
      "UPS",
      "Tok sazlayjylar",
      "UPS ucin batareyler",
      "UPS ucin beylekiler",
    ],
  },
  {
    name: "Mebeller",
    items: ["Kompyuter kreslolary", "Kompyuter stollary"],
  },
  {
    name: "Hojalyk hrytlary",
    items: [
      "Oy ucin atrubutlar",
      "Telewizorlar",
      "TW-pristawkalar hem tyunerler",
      "Pylesoslar",
      "Utukler we bugly utukler",
      "Howa nemlendirijiler we arassalayjylar",
      "Yyladys enjamlary",
      "Ashana enjamlary we esbaplary",
      "Caynekler",
      "Kofe masynlary",
      "Miwe sykyjylar",
      "Blenderler",
      "Et uweyji",
      "Terezi",
    ],
  },
  {
    name: "Gozellik we saglyk",
    items: [
      "Aynek",
      "Fenlar",
      "Ploykalar we goneldijiler",
      "Dis çotgalary we irregatorlar",
      "Elektrobritwalar",
      "Saç kesmek we trimmer",
      "Massajorlar",
      "Elektrik skuterler",
      "Gozellik we saglyk uçin",
    ],
  },
  {
    name: "Basgalar",
    items: [
      "Lityum batareyler",
      "Elçyralar",
      "Kabelelr",
      "Audio kabeller we geçirijiler",
      "Wideo kabeller we geçirijiler",
      "Kabel-tertiplemesi",
      "Adapterler we konwerterler",
      "Splitterler we swiçler",
      "Elektrik uzaldyjylar we rozetkalar",
      "Gurallar",
      "Basgalar",
    ],
  },
];

function Sidebar() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-[260px] fixed top-16 left-0 h-[calc(100vh-64px)] bg-white shadow-lg border-r overflow-x-visible">
      
      {/* HEADER */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-3 font-bold text-sm">
        Tüm Ürünler
      </div>

      {/* MENU */}
      <div className="text-sm">
        {categories.map((cat, index) => (
          
          /* 🔥 MAIN WRAPPER */
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >

            {/* CATEGORY */}
            <div className="flex justify-between items-center px-4 py-2.5 
              text-gray-700 border-b cursor-pointer
              hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50
              transition-all duration-200"
            >
              <span className="font-medium">{cat.name}</span>
              <span className="text-gray-400">›</span>
            </div>

            {/* MEGA MENU */}
            {active === index && (
              <div
                className="absolute left-full top-0 w-[320px] bg-white 
                shadow-2xl border rounded-lg p-5 z-50 
                animate-fadeIn max-h-[500px] overflow-y-auto"
              >
                <h4 className="font-semibold mb-3 text-gray-800">
                  {cat.name}
                </h4>

                <div className="space-y-1">
                  {cat.items.map((item, i) => (
                    <p
                      key={i}
                      className="py-1.5 text-gray-600 hover:text-blue-500 
                      cursor-pointer transition text-sm"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;