import Image from "next/image";
import background from "../../public/assate/Team.webp";
import cat from "../../public/assate/cat.jpg";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <>
      <div className=" w-[100%] h-[500px] bg-gradient-to-r from-indigo-500 from-10% via-red-500 via-50% to-emerald-500 to-90% ...">
        <Image
          src={cat}
          alt="background image"
          className="w-[100%] h-[500px] opacity-60 object-cover "></Image>
      </div>

      <div className="card container  grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-[50px] ">
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
        </div>
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
        </div>
        <div className="one text-center bg-slate-300 p-4 ">
          <h1 className="font-poppins text-2xl ">hello Rana</h1>
        </div>
      </div>
    </>
  );
}
