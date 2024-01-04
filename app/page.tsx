import HeaderIndex from "@/components/headerIndex";
import ProfileIndex from "@/components/profileIndex";
import UserOne from "@/components/userOne";
import UserTwo from "@/components/userTwo";
import InputIndex from "@/components/inputIndex";


export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="min-w-full border rounded mt-6">
        <div className="">
          <div className="w-full">
            <HeaderIndex />

            <ProfileIndex />

            <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
              <ul className="space-y-2">
                <UserOne />
                <UserTwo />
              </ul>
            </div>
            <InputIndex />
          </div>
        </div>
      </div>
    </div>
  )
}