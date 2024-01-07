import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Web5 } from "@web5/api";
import { useState, useEffect } from "react";

// import { Metadata } from "next"
import { PlusCircledIcon } from "@radix-ui/react-icons"

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


import AlbumArtwork from "../widgets/album-artwork.jsx"
import Menu from "../widgets/menu.jsx"
import PodcastEmptyPlaceholder from "../widgets/podcast-empty-placeholder.jsx"
import Sidebar from "../widgets/sidebar.jsx"
import { listenNowAlbums, madeForYouAlbums } from "../data/albums"
import { playlists } from "../data/playlists"

export const metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [newAlbum, setNewAlbum] = useState({
    name: '',
    artist: '',
    cover: '',
    description: '',
    price: '',
    quantity: 0,
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewAlbum({ ...newAlbum, [e.target.id]: e.target.value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the current highest id in the album list
    const highestId = listenNowAlbums.reduce((max, album) => Math.max(max, album.id), 0);

    // Add the new album to the album list with an incremented id
    listenNowAlbums.push({
      ...newAlbum,
      id: highestId + 1, // Increment the highest id for the new album
      quantity: parseInt(newAlbum.quantity, 10) // Ensure quantity is a number
    });

    // Reset form fields
    setNewAlbum({
      name: '',
      artist: '',
      cover: '',
      description: '',
      price: '',
      quantity: 0,
    });
  };

   

  const queryDwn = async () => {
    const { web5, did } = await Web5.connect();
    const { record } = await web5.dwn.records.query({
      message: {
        filter: {
          recipient: did,
      },
      },
    });

    console.log(record)
  }

  useEffect(() => {
    const connectAndCreateRecord = async () => {
    try {
      const { web5, did: userDid } = await Web5.connect();
      const { record } = await web5.dwn.records.create({
      data: {
        newAlbum,
      },
      message: {
        dataFormat: 'application/json',
      },
    });
      console.log(record)
    } catch (error) {
      // Handle any errors that occur
      console.error('Error connecting to Web5 or creating record:', error);
    }
  };
    connectAndCreateRecord();
    queryDwn();
  }, [newAlbum]);
  
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
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="art">Art</TabsTrigger>
                        {/* <TabsTrigger value="live" disabled>
                          Live
                        </TabsTrigger> */}
                      </TabsList>
                      <div  className="ml-auto mr-4">
                         <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <PlusCircledIcon className="mr-2 h-4 w-4" />
                              Add collection
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Edit profile</DialogTitle>
                              <DialogDescription>
                                Make changes to your profile here. Click save when youre done.
                              </DialogDescription>
                            </DialogHeader>
                              <form onSubmit={handleSubmit}>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="name" className="text-right">Album Name</Label>
                                  <Input id="name" value={newAlbum.name} onChange={handleChange} placeholder="Album Name" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="artist" className="text-right">Artist</Label>
                                  <Input id="artist" value={newAlbum.artist} onChange={handleChange} placeholder="Artist Name" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="cover" className="text-right">Cover</Label>
                                  <Input id="cover" value={newAlbum.cover} onChange={handleChange} placeholder="Cover Link" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="description" className="text-right">Description</Label>
                                  <Input id="description" value={newAlbum.description} onChange={handleChange} placeholder="Album Description" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="price" className="text-right">Price</Label>
                                  <Input id="price" value={newAlbum.price} onChange={handleChange} placeholder="Price" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="quantity" className="text-right">Quantity</Label>
                                  <Input id="quantity" value={newAlbum.quantity} onChange={handleChange} placeholder="Quantity" className="col-span-3" />
                                </div>
                                <Button type="submit">Save changes</Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Music Albums
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your music albums
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.id}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Royalties
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your royalty pass
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="art"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Art
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite artpieces. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
