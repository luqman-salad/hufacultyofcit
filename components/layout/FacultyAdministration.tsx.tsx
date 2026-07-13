import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

// Fetch data directly in the component
async function getAdminData() {
  return await client.fetch(`*[_type == "adminMember"]{
    name, role, office, email, 
    "image": image.asset._ref,
    social
  }`);
}

export default async function FacultyAdministration() {
  const administration = await getAdminData();

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-4xl font-semibold text-[#1a2b4a] text-center mb-16 tracking-tight">
          Faculty Administration
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {administration.map((member: any, index: number) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-all">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                <Image
                  src={urlFor(member.image).url()}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#4c9c6f] mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-[#1a2b4a] mb-5 uppercase">{member.role}</p>
              <p className="text-sm text-[#5a6a85] leading-relaxed mb-8 flex-grow">{member.office}</p>

              <div className="flex items-center justify-center gap-5 mt-auto pt-6 border-t border-gray-100 w-full">
                {member.social?.facebook && <Link href={member.social.facebook}><FaFacebookF size={18} /></Link>}
                {member.social?.twitter && <Link href={member.social.twitter}><FaTwitter size={18} /></Link>}
                {member.social?.linkedin && <Link href={member.social.linkedin}><FaLinkedinIn size={18} /></Link>}
                <Link href={`mailto:${member.email}`} className="text-[#a0aec0] hover:text-[#4c9c6f]"><HiEnvelope size={20} /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}