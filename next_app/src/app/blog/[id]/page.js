'use client';

import { useParams } from 'next/navigation';

export default function ProfilePage() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Blog page: {id}</h1>
    </div>
  );
}
