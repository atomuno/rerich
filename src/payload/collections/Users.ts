import type { CollectionConfig } from "payload";

import { PAYLOAD_COLLECTION_LABELS } from "../admin-labels";

export const Users: CollectionConfig = {
  slug: "users",
  labels: PAYLOAD_COLLECTION_LABELS.users,
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [],
};
