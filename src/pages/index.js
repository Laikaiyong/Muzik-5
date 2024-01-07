import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Web5 } from "@web5/api";
import { useState, useEffect } from "react";

import { Metadata } from "next"
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


import AlbumArtwork from "./widgets/album-artwork"
import Menu from "./widgets/menu"
import PodcastEmptyPlaceholder from "./widgets/podcast-empty-placeholder"
import Sidebar from "./widgets/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "../data/albums"
import { playlists } from "../data/playlists"

export const metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);


  const createMusic = async () => {
    const { record } = await web5.dwn.records.create({
      data: {
          content: "Hello Web5",
          description: "Keep Building!"
      },
      message: {
          dataFormat: 'application/json'
      }
  });
  }

  // const createProtocolDefinition = () => {
  //   const dingerProtocolDefinition = {
  //     protocol: "https://blackgirlbytes.dev/dinger-chat-protocol",
  //     published: true,
  //     types: {
  //       ding: {
  //         schema: "https://blackgirlbytes.dev/ding",
  //         dataFormats: ["application/json"],
  //       },
  //     },
  //     structure: {
  //       ding: {
  //         $actions: [
  //           { who: "anyone", can: "write" },
  //           { who: "author", of: "ding", can: "read" },
  //           { who: "recipient", of: "ding", can: "read" },
  //         ],
  //       },
  //     },
  //   };
  //   return dingerProtocolDefinition;
  // };

  // const queryForProtocol = async (web5) => {
  //   return await web5.dwn.protocols.query({
  //     message: {
  //       filter: {
  //         protocol: "https://blackgirlbytes.dev/dinger-chat-protocol",
  //       },
  //     },
  //   });
  // };

  // const installProtocolLocally = async (web5, protocolDefinition) => {
  //   return await web5.dwn.protocols.configure({
  //     message: {
  //       definition: protocolDefinition,
  //     },
  //   });
  // };

  // const configureProtocol = async (web5, did) => {
  //   const protocolDefinition = await createProtocolDefinition();

  //   const { protocols: localProtocol, status: localProtocolStatus } =
  //     await queryForProtocol(web5);
  //   console.log({ localProtocol, localProtocolStatus });
  //   if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {

  //     const { protocol, status } = await installProtocolLocally(web5, protocolDefinition);
  //     console.log("Protocol installed locally", protocol, status);

  //     const { status: configureRemoteStatus } = await protocol.send(did);
  //     console.log("Did the protocol install on the remote DWN?", configureRemoteStatus);
  //   } else {
  //     console.log("Protocol already installed");
  //   }
  // };
  

  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();
      setWeb5(web5);
      console.log(web5);
      console.log(did);
      setMyDid(did);

      if (web5 && did) {
        // await configureProtocol(web5, did);
      }
    };
    initWeb5();
  }, []);

  useEffect(() => {
    if (!web5 || !myDid) return;

  }, [web5, myDid]);

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
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                  Name
                                </Label>
                                <Input
                                  id="name"
                                  defaultValue="Mia Khalifa"
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                  Username
                                </Label>
                                <Input
                                  id="username"
                                  defaultValue="@miakhalifa"
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
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
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
                          Your personal playlists. Updated daily.
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
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
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
