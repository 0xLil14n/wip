"use client";
import Wip from "@/app/_components/wip";
import {
  useProfile,
  usePublications,
  Profile,
  LimitType,
  PublicationType,
} from "@lens-protocol/react-web";

export default function Profile({
  params: { slug: handle },
}: {
  params: { slug: string };
}) {
  const namespace = handle.split(".")[1];
  handle = handle.split(".")[0] as string;
  console.log("namespace: ", { namespace, handle });
  let { data: profile, loading } = useProfile({
    forHandle: `${namespace}/${handle}`,
  });
  if (loading) return <p className="p-14">Loading ...</p>;

  return (
    <div>
      <div className="p-14">
        <div className="direction-row mb-8 flex max-w-3xl gap-10">
          {profile?.metadata?.picture?.__typename === "ImageSet" && (
            <img
              width="200"
              height="200"
              alt={profile.handle?.fullHandle}
              className="rounded-xl"
              src={profile.metadata.picture.optimized?.uri}
            />
          )}
          <div>
            <h1 className="my-3 text-3xl">
              {profile?.handle?.localName}.{profile?.handle?.namespace}
            </h1>
            <h3 className="mb-4 text-xl">{profile?.metadata?.bio}</h3>
          </div>
        </div>
        <Wip />
        {profile && <Publications profile={profile} />}
      </div>
    </div>
  );
}

function Publications({ profile }: { profile: Profile }) {
  let { data: publications } = usePublications({
    where: {
      publicationTypes: [PublicationType.Post],
      from: [profile.id],
    },
    limit: LimitType.TwentyFive,
  });

  return (
    <>
      {publications?.map((pub: any, index: number) => (
        <div key={index} className="mb-3 rounded border-b px-4 py-4">
          <p>{pub.metadata.content}</p>
          {pub.metadata?.asset?.image?.optimized?.uri && (
            <img
              width="400"
              height="400"
              alt={profile.handle?.fullHandle}
              className="mb-2 mt-6 rounded-xl"
              src={pub.metadata?.asset?.image?.optimized?.uri}
            />
          )}
        </div>
      ))}
    </>
  );
}
