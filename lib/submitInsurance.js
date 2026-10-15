import {supabase} from "../lib/supabase";

export async function submitBusinessType(fd){

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

export async function submitPersonalType(fd){

    const {error} = await supabase.from ("hmo_personal_leads").insert({
        full_name:fd.get("fullName"),
        email:fd.get("email"),
        contact_number:fd.get("mobile"),
        birthday: fd.get("birthday"),
        agreed: fd.get("agreed") === "on" ? "Yes" : "No",

    })

    return { error };

}