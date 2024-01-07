import { useRouter } from 'next/router'
import Image from "next/image"
import { listenNowAlbums } from "../data/albums"
import { Inter } from 'next/font/google'
import { Web5 } from "@web5/api";
import { useState, useEffect } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Menu from "../widgets/menu.jsx"
import Sidebar from "../widgets/sidebar.jsx"
import { playlists } from "../data/playlists"


export default function About(){
    const router = useRouter()
    const { id } = router.query

    const item = listenNowAlbums[id - 1];
    return (
    <>
      <div className="sm:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                      <div className="flex">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            {item?.name ?? ""}
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            {item?.description ?? ""}
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex space-x-4">
                      <Image
              src={item?.cover ?? ""}
              alt={item?.name ?? ""}
              aspectRatio="portrait"
                                width={250}
                                height={330}
              className=
                "h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
              
            />
            <div className='pl-12'>
                <h1 className='text-xl font-medium mb-20'>Details</h1>
            <p className="text-sm text-muted-foreground mb-3">Artist: {item?.artist ?? ""}</p>
              <p className="text-sm text-muted-foreground mb-3">Price: {item?.price ?? ""}</p>
              <p className="text-sm text-muted-foreground mb-20">Quantity: {item?.quantity ?? ""}</p>
              <Button>Purchase</Button>
            </div>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}