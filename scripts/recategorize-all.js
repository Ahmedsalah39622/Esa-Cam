const fs = require("fs");
const path = require("path");

const jsonPath = path.join(__dirname, "../src/data/all-combined-products.json");
const products = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

function classifyProduct(name, desc = "", currentCat = "") {
  const text = `${name} ${desc}`.toLowerCase();

  // 1. Pre-Owned / Used
  if (
    text.includes("used") ||
    text.includes("pre-owned") ||
    text.includes("مستعمل") ||
    text.includes("refurbished") ||
    text.includes("second hand")
  ) {
    return "pre-owned";
  }

  // 2. Dental Equipments
  if (
    text.includes("dental") ||
    text.includes("اسنان") ||
    text.includes("أسنان") ||
    text.includes("teeth") ||
    text.includes("dentistry") ||
    text.includes("dental photography") ||
    text.includes("contrastor") ||
    text.includes("oral photo")
  ) {
    return "dental";
  }

  // 3. Bags & Straps
  if (
    text.includes("bag") ||
    text.includes("backpack") ||
    text.includes("strap") ||
    text.includes("case") ||
    text.includes("pouch") ||
    text.includes("holster") ||
    text.includes("sling") ||
    text.includes("messenger") ||
    text.includes("carrying case") ||
    text.includes("hardcase") ||
    text.includes("hard case") ||
    text.includes("lowepro") ||
    text.includes("peak design everyday")
  ) {
    return "bags";
  }

  // 4. Memory Cards
  if (
    text.includes("memory card") ||
    text.includes("sd card") ||
    text.includes("sdxc") ||
    text.includes("sdhc") ||
    text.includes("cfexpress") ||
    text.includes("cfast") ||
    text.includes("microsd") ||
    text.includes("card reader") ||
    text.includes("prograde digital") ||
    text.includes("angelbird") ||
    (text.includes("sandisk") && (text.includes("extreme") || text.includes("ultra") || text.includes("gb") || text.includes("tb"))) ||
    (text.includes("lexar") && (text.includes("professional") || text.includes("gb") || text.includes("silver") || text.includes("gold")))
  ) {
    return "memory-cards";
  }

  // 5. Tripods & Supports
  if (
    text.includes("tripod") ||
    text.includes("monopod") ||
    text.includes("light stand") ||
    text.includes("c-stand") ||
    text.includes("c stand") ||
    text.includes("boom arm") ||
    text.includes("ball head") ||
    text.includes("fluid head") ||
    text.includes("fluid video head") ||
    text.includes("magic arm") ||
    text.includes("super clamp") ||
    text.includes("crab clamp") ||
    text.includes("desk stand") ||
    text.includes("floor stand") ||
    text.includes("slider") ||
    text.includes("dolly") ||
    text.includes("manfrotto 055") ||
    text.includes("manfrotto 190") ||
    text.includes("benro") && text.includes("stand")
  ) {
    return "tripods";
  }

  // 6. Flashes (Speedlites, Strobe heads, Flash triggers)
  if (
    text.includes("speedlite") ||
    text.includes("speedlight") ||
    text.includes("v1-") ||
    text.includes("v1 ") ||
    text.includes("v1pro") ||
    text.includes("v860") ||
    text.includes("tt685") ||
    text.includes("tt600") ||
    text.includes("tt350") ||
    text.includes("ad200") ||
    text.includes("ad300") ||
    text.includes("ad400") ||
    text.includes("ad600") ||
    text.includes("ad100") ||
    text.includes("ad1200") ||
    text.includes("ad-") ||
    text.includes("flash trigger") ||
    text.includes("xpro") ||
    text.includes("x2t") ||
    text.includes("x3 ") ||
    text.includes("xnano") ||
    text.includes("strobe") ||
    text.includes("ring flash") ||
    text.includes("macro flash") ||
    text.includes("profoto a10") ||
    text.includes("profoto a1") ||
    text.includes("profoto b10") ||
    (text.includes("flash") && !text.includes("flash drive"))
  ) {
    return "flashes";
  }

  // 7. Lighting Equipment (LEDs, Softboxes, Modifiers, Monolights, Continuous light)
  if (
    text.includes("softbox") ||
    text.includes("monolight") ||
    text.includes("tube light") ||
    text.includes("pavotube") ||
    text.includes("amaran") ||
    text.includes("aputure") ||
    text.includes("nanlite") ||
    text.includes("forza") ||
    text.includes("lantern modifier") ||
    text.includes("lantern") ||
    text.includes("parabolic") ||
    text.includes("grid modifier") ||
    text.includes("fresnel") ||
    text.includes("spotlight mount") ||
    text.includes("barn door") ||
    text.includes("reflector") ||
    text.includes("diffuser") ||
    text.includes("panel light") ||
    text.includes("ring light") ||
    text.includes("led video light") ||
    text.includes("cob light") ||
    text.includes("godox sl") ||
    text.includes("godox vl") ||
    text.includes("godox sz") ||
    text.includes("godox tl") ||
    text.includes("godox lc") ||
    text.includes("godox ml") ||
    text.includes("godox la") ||
    text.includes("light")
  ) {
    return "lighting";
  }

  // 8. Stabilizer & Gimbal
  if (
    text.includes("gimbal") ||
    text.includes("stabilizer") ||
    text.includes("ronin") ||
    text.includes("rs 3") ||
    text.includes("rs3") ||
    text.includes("rs 4") ||
    text.includes("rs4") ||
    text.includes("rs 2") ||
    text.includes("rs2") ||
    text.includes("rsc 2") ||
    text.includes("crane") ||
    text.includes("weebill") ||
    text.includes("scorp") ||
    text.includes("osmo mobile") ||
    text.includes("insta360 flow") ||
    text.includes("dji om") ||
    text.includes("follow focus") ||
    text.includes("focus motor")
  ) {
    return "gimbals";
  }

  // 9. Audio & Video (Mics, Wireless kits, Field recorders, Shotguns, Audio Interfaces)
  if (
    text.includes("mic") ||
    text.includes("microphone") ||
    text.includes("wireless go") ||
    text.includes("wireless pro") ||
    text.includes("wireless me") ||
    text.includes("lark max") ||
    text.includes("lark m1") ||
    text.includes("lark m2") ||
    text.includes("lark 150") ||
    text.includes("dji mic") ||
    text.includes("lavalier") ||
    text.includes("shotgun mic") ||
    text.includes("field recorder") ||
    text.includes("audio recorder") ||
    text.includes("zoom h") ||
    text.includes("zoom f") ||
    text.includes("tascam") ||
    text.includes("sennheiser") ||
    text.includes("boya") ||
    text.includes("saramonic") ||
    text.includes("deity") ||
    text.includes("transmitter") ||
    text.includes("receiver") ||
    text.includes("audio interface") ||
    text.includes("headphone") ||
    text.includes("boom pole") ||
    text.includes("windshield") ||
    text.includes("deadcat") ||
    text.includes("audio")
  ) {
    return "audio";
  }

  // 10. Lenses
  if (
    text.includes("lens") ||
    text.includes("lenses") ||
    text.includes(" f/") ||
    text.includes("f/1.") ||
    text.includes("f/2.") ||
    text.includes("f/4") ||
    text.includes("f/2.8") ||
    text.includes("f/1.4") ||
    text.includes("f/1.8") ||
    text.includes("f/1.2") ||
    text.includes("mm ") ||
    text.includes("zoom lens") ||
    text.includes("prime lens") ||
    text.includes("telephoto") ||
    text.includes("wide angle") ||
    text.includes("macro lens") ||
    text.includes("anamorphic") ||
    text.includes("cine lens") ||
    text.includes("gm ii") ||
    text.includes("art lens") ||
    text.includes("contemporary") ||
    text.includes("sports lens")
  ) {
    return "lenses";
  }

  // 11. Cameras
  if (
    text.includes("camera") ||
    text.includes("camcorder") ||
    text.includes("mirrorless") ||
    text.includes("dslr") ||
    text.includes("cinema body") ||
    text.includes("cinema line") ||
    text.includes("fx3") ||
    text.includes("fx6") ||
    text.includes("fx30") ||
    text.includes("fx9") ||
    text.includes("a7 ") ||
    text.includes("a7r") ||
    text.includes("a7s") ||
    text.includes("a7c") ||
    text.includes("a6700") ||
    text.includes("a6400") ||
    text.includes("eos r") ||
    text.includes("r5 ") ||
    text.includes("r6 ") ||
    text.includes("r8 ") ||
    text.includes("r50") ||
    text.includes("r100") ||
    text.includes("r3 ") ||
    text.includes("r1 ") ||
    text.includes("r5 c") ||
    text.includes("nikon z") ||
    text.includes("z8") ||
    text.includes("z9") ||
    text.includes("z6") ||
    text.includes("z5") ||
    text.includes("z50") ||
    text.includes("z fc") ||
    text.includes("lumix s") ||
    text.includes("lumix gh") ||
    text.includes("bmpcc") ||
    text.includes("pocket 3") ||
    text.includes("pocket 2") ||
    text.includes("osmo action") ||
    text.includes("gopro") ||
    text.includes("insta360 x") ||
    text.includes("insta360 ace") ||
    text.includes("red komodo") ||
    text.includes("v-raptor")
  ) {
    return "cameras";
  }

  return "accessories";
}

const stats = {};
const updatedProducts = products.map((p) => {
  const newCat = classifyProduct(p.name, p.shortDescription || "", p.category);
  stats[newCat] = (stats[newCat] || 0) + 1;
  return {
    ...p,
    category: newCat,
  };
});

console.log("📊 Category distribution across all 2660 products:", stats);

fs.writeFileSync(jsonPath, JSON.stringify(updatedProducts, null, 2), "utf8");
console.log("✅ Successfully updated all-combined-products.json with accurate categories!");
