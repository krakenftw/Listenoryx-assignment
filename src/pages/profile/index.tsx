import ProfileForm from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-2 items-center justify-center pt-20 py-10">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="w-full md:w-1/2 p-6 md:p-0">
        <ProfileForm />
      </div>
    </div>
  );
}
