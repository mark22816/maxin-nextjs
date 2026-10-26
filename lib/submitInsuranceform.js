import {supabase} from "./supabase";

/* get quote business page form query */

export async function BusinessTypeForm(fd){

    const {error} = await supabase.from ("hmo_business_leads").insert({
        business_type:fd.getAll("businessType"),
        company_name:fd.get("companyName"),
        nature_of_business:fd.get("natureOfBusiness"),
        employee_count: Number(fd.get("employeeCount")),
        industrial: fd.get("industrial") || null,
        contact_person: fd.get("contactPerson"),
        start_date: fd.get("startDate"),
        email: fd.get("email"),
        contact_number:fd.get("contactNumber"),
        location: fd.get("location"),
        registered_in_ph: fd.get("registeredInPH"),
        has_hmo: fd.get("hasHMO"),
        agreed: fd.get("agreed") === "on" ? "Yes" : "No",

    })

    return { error };

}
/* get quote personal  page form query */

export async function PersonalTypeForm(fd){

    const {error} = await supabase.from ("hmo_personal_leads").insert({
        full_name:fd.get("fullName"),
        email:fd.get("email"),
        contact_number:fd.get("mobile"),
        birthday: fd.get("birthday"),
        agreed: fd.get("agreed") === "on" ? "Yes" : "No",

    })

    return { error };

}

/* get quote mutual fund page query form */

const BUCKET = "lead-documents";
const safeName = (name) => name.replace(/[^a-zA-Z0-9._-]/g, "_");

export async function submitLifeMutualFund(fd, files = []) {
  const uploadedPaths = [];

  for (const file of files) {
    const path = `mutualfund/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(path, file, { contentType: file.type, upsert: false });

    if (uploadError) return { error: uploadError };
    uploadedPaths.push(path);
  }

  const { error } = await supabase.from("life_mutual_funds_leads").insert({
    products: fd.getAll("products"),
    salutation: fd.get("salutation"),
    full_name: fd.get("fullName").trim(),
    birthday: fd.get("birthday"),
    contact: fd.get("contact").trim(),
    email: fd.get("email").trim(),
    files: uploadedPaths,
    agreed: fd.get("agreed") === "on" ? "Yes" : "No",
  });

  return { error };
}
  
/* get quote fire insurance page query form */

export async function FireInsuranceForm(fd){
    // Upload the supporting image first (optional)
    let imagePathFire = null;
    const file = fd.get("supportingImage");

    if (file && file.size > 0) {
        imagePathFire = `fire/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;
        const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(imagePathFire, file, { contentType: file.type, upsert: false });

        if (uploadError) return { error: uploadError };
    }

const {error} = await supabase.from("fire_insurance_leads").insert({

full_name: fd.get("fullName").trim(),
sex: fd.get('sex'),
registered_name:fd.get("registeredName") || null,
address: fd.get("address").trim(),
zip_code: fd.get("zipCode").trim(),
birthday: fd.get ("birthday"),
age: Number(fd.get("age")),
place_of_birth: fd.get("placeOfBirth").trim(),
nationality:fd.get("nationality").trim(),
property_location: fd.get("propertyLocation").trim(),
email: fd.get("email").trim(),
mobile: fd.get("mobile").trim(),
property_use: fd.getAll("propertyUse") || null,
supporting_image: imagePathFire,
agreed: fd.get("agreed") === "on" ? "Yes" : "No",


})
    return {error};

}


/* get quote motor car insurance page query form */

export async function MotorcarForm(fd){
    // Upload the supporting image first (optional)
    let imagePathMotorcar = null;
    const file = fd.get("supportingImage");

    if (file && file.size > 0) {
        imagePathMotorcar = `motorcar/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;
        const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(imagePathMotorcar, file, { contentType: file.type, upsert: false });

        if (uploadError) return { error: uploadError };
    }

const {error} = await supabase.from("motorcar_insurance_leads").insert({

full_name: fd.get("fullName").trim(),
sex: fd.get('sex'),
registered_name:fd.get("registeredName") || null,
address: fd.get("address").trim(),
zip_code: fd.get("zipCode").trim(),
birthday: fd.get ("birthday"),
age: Number(fd.get("age")),
place_of_birth: fd.get("placeOfBirth").trim(),
nationality:fd.get("nationality").trim(),
email: fd.get("email").trim(),
mobile: fd.get("mobile").trim(),
vehicle_type: fd.get("vehicleType").trim(),
natural_disaster_coverage: fd.get("naturalDisasterCoverage").trim(),
vehicle_year_model: fd.get("vehicleYearModel").trim(),
vehicle_brand: fd.get("vehicleBrand").trim(),
vehicle_color: fd.get("vehicleColor").trim(),
vehicle_chassis_no: fd.get("vehicleChassisNo").trim(),
vehicle_engine_no: fd.get("vehicleEngineNo").trim(),
supporting_image: imagePathMotorcar,


agreed: fd.get("agreed") === "on" ? "Yes" : "No",


})
    return {error};

}

/* get quote Travel insurance page query form */

export async function TravelForm(fd){
    // Upload the supporting image first (optional)
    let imagePathTravel = null;
    const file = fd.get("supportingImage");

    if (file && file.size > 0) {
        imagePathTravel = `travel/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;
        const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(imagePathTravel, file, { contentType: file.type, upsert: false });

        if (uploadError) return { error: uploadError };
    }

const {error} = await supabase.from("travel_insurance_leads").insert({

full_name: fd.get("fullName").trim(),
sex: fd.get('sex'),
registered_name:fd.get("registeredName") || null,
address: fd.get("address").trim(),
zip_code: fd.get("zipCode").trim(),
birthday: fd.get ("birthday"),
age: Number(fd.get("age")),
place_of_birth: fd.get("placeOfBirth").trim(),
nationality:fd.get("nationality").trim(),
email: fd.get("email").trim(),
phone: fd.get("mobile").trim(),
supporting_image: imagePathTravel,


agreed: fd.get("agreed") === "on" ? "Yes" : "No",


})
    return {error};

}

/* get quote personal accident insurance page query form */

export async function PersonalAccidentForm(fd){
    // Upload the supporting image first (optional)
    let imagePathPersonalAccident = null;
    const file = fd.get("supportingImage");

    if (file && file.size > 0) {
        imagePathPersonalAccident = `personal_accident/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;
        const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(imagePathPersonalAccident, file, { contentType: file.type, upsert: false });

        if (uploadError) return { error: uploadError };
    }

const {error} = await supabase.from("personal_accident_leads").insert({

full_name: fd.get("fullName").trim(),
sex: fd.get('sex'),
registered_name:fd.get("registeredName") || null,
address: fd.get("address").trim(),
zip_code: fd.get("zipCode").trim(),
birthday: fd.get ("birthday"),
age: Number(fd.get("age")),
place_of_birth: fd.get("placeOfBirth").trim(),
nationality:fd.get("nationality").trim(),
email: fd.get("email").trim(),
mobile: fd.get("mobile").trim(),
supporting_image: imagePathPersonalAccident,


agreed: fd.get("agreed") === "on" ? "Yes" : "No",


})
    return {error};

}

/* get quote marine insurance page query form */

export async function MarineInsuranceForm(fd){
    // Upload the supporting image first (optional)
    let imagePathMarineInsurance = null;
    const file = fd.get("supportingImage");

    if (file && file.size > 0) {
        imagePathMarineInsurance = `marine_insurance/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;
        const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(imagePathMarineInsurance, file, { contentType: file.type, upsert: false });

        if (uploadError) return { error: uploadError };
    }

const {error} = await supabase.from("marine_insurance_leads").insert({

full_name: fd.get("fullName").trim(),
sex: fd.get('sex'),
registered_name:fd.get("registeredName") || null,
address: fd.get("address").trim(),
zip_code: fd.get("zipCode").trim(),
birthday: fd.get ("birthday"),
age: Number(fd.get("age")),
place_of_birth: fd.get("placeOfBirth").trim(),
nationality:fd.get("nationality").trim(),
email: fd.get("email").trim(),
mobile: fd.get("mobile").trim(),
supporting_image: imagePathMarineInsurance,
agreed: fd.get("agreed") === "on" ? "Yes" : "No",


})
    return {error};

}

/* get quote Bonds and Surety insurance page query form */

export async function BondSuretyForm(fd){
    // Upload the supporting image first (optional)
    let imagePathBondSurety = null;
    const file = fd.get("supportingImage");

    if (file && file.size > 0) {
        imagePathBondSurety = `bonds_surety/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;
        const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(imagePathBondSurety, file, { contentType: file.type, upsert: false });

        if (uploadError) return { error: uploadError };
    }

const {error} = await supabase.from("bonds_surety_leads").insert({

full_name: fd.get("fullName").trim(),
sex: fd.get('sex'),
registered_name:fd.get("registeredName") || null,
address: fd.get("address").trim(),
zip_code: fd.get("zipCode").trim(),
birthday: fd.get ("birthday"),
age: Number(fd.get("age")),
place_of_birth: fd.get("placeOfBirth").trim(),
nationality:fd.get("nationality").trim(),
email: fd.get("email").trim(),
mobile: fd.get("mobile").trim(),
supporting_image: imagePathBondSurety,
agreed: fd.get("agreed") === "on" ? "Yes" : "No",


})
    return {error};

}

/* get quote Engineering insurance page query form */

export async function Engineeringform(fd){
    // Upload the supporting image first (optional)
    let imagePathEngenireeng = null;
    const file = fd.get("supportingImage");

    if (file && file.size > 0) {
        imagePathEngenireeng = `Engineering/${crypto.randomUUID()}/${Date.now()}-${safeName(file.name)}`;
        const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(imagePathEngenireeng, file, { contentType: file.type, upsert: false });

        if (uploadError) return { error: uploadError };
    }

const {error} = await supabase.from("engineering_insurance_leads").insert({

full_name: fd.get("fullName").trim(),
sex: fd.get('sex'),
registered_name:fd.get("registeredName") || null,
address: fd.get("address").trim(),
zip_code: fd.get("zipCode").trim(),
birthday: fd.get ("birthday"),
age: Number(fd.get("age")),
place_of_birth: fd.get("placeOfBirth").trim(),
nationality:fd.get("nationality").trim(),
email: fd.get("email").trim(),
mobile: fd.get("mobile").trim(),
supporting_image: imagePathEngenireeng,
agreed: fd.get("agreed") === "on" ? "Yes" : "No",


})
    return {error};

}