import hospital from "@/assets/hospital.svg";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="md:text-3xl font-bold tracking-tight">
        <span id="typewriter-text">Patient information management system</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-center ">
        <div className="md:w-2/5">
          <img src={hospital} alt="Hospital" />
        </div>
        <div className="md:w-3/5 ">
          <p className="mb-4">
            Our Patient Information Management System (PIMS) provides
            streamlined patient management services. It offers a user-friendly
            interface for displaying patient lists, allowing easy access to
            essential details like name, age, and contact information. Users can
            effortlessly add, edit, or delete patient records, with built-in
            confirmation prompts for safe deletion.
          </p>
          <p>
            Dynamic updates ensure real-time changes to the patient list without
            manual refreshes. PIMS integrates seamlessly with SQL Server
            databases using APIs for secure data storage. With PIMS, healthcare
            providers can optimize patient management processes and enhance
            patient care delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
