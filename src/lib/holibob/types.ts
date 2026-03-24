// Product Discovery types
export interface ProductDiscoveryParams {
  where?: { freeText?: string; data?: { destinationId?: string } };
  when?: { freeText?: string };
  who?: { freeText?: string };
  what?: { freeText?: string };
  seenProductIdList?: string[];
  count?: number;
}

export interface HolibobImage {
  id: string;
  url: string;
  type: string;
}

export interface HolibobGuidePrice {
  gross: number;
  grossFormattedText: string;
  currency: string;
}

export interface DiscoveryProduct {
  id: string;
  name: string;
  description: string;
  reviewCount: number;
  reviewRating: number;
  maxDuration: string;
  holibobGuidePrice: HolibobGuidePrice | null;
  geoCoordinate: { latitude: number; longitude: number } | null;
  imageList: HolibobImage[];
}

export interface ProductDiscoveryResult {
  destination: { id: string; name: string } | null;
  recommendedDestinations: { id: string; name: string }[];
  recommendedTags: { id: string; name: string }[];
  recommendedSearchTerms: { searchTerm: string }[];
  products: DiscoveryProduct[];
}

// Product Detail types
export interface ProductReview {
  id: string;
  authorName: string;
  rating: number;
  title: string;
  content: string;
  publishedDate: string;
}

export interface ProductContent {
  type: string;
  name: string;
  description: string;
  descriptionHtml: string;
  ordinalPosition: number;
}

export interface ProductDetail {
  id: string;
  name: string;
  description: string;
  guidePriceFormattedText: string;
  guidePrice: number;
  guidePriceCurrency: string;
  minDuration: string;
  maxDuration: string;
  reviewCount: number;
  reviewRating: number;
  reviews: ProductReview[];
  reviewRecordCount: number;
  contentList: ProductContent[];
  imageList: HolibobImage[];
  categoryList: { id: string; name: string }[];
  geoCoordinate: { latitude: number; longitude: number } | null;
  place: { cityName: string; countryName: string } | null;
}

// Transformed tour for UI components
export interface Tour {
  id: string;
  title: string;
  image: string | null;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;
  priceFormatted: string | null;
  duration: string;
  description: string;
}

// Availability types
export interface AvailabilityDate {
  id: string;
  date: string;
  guidePriceFormattedText: string;
}

export interface AvailabilityOption {
  id: string;
  label: string;
  dataType: string;
  dataFormat?: string;
  type?: string;
  value?: string;
  required?: boolean;
  availableOptions?: { label: string; value: string }[];
  answerValue?: string;
  answerFormattedText?: string;
}

export interface PricingCategory {
  id: string;
  label: string;
  minParticipants: number;
  maxParticipants: number;
  units: number;
  unitPrice: { grossFormattedText: string; gross: number };
  totalPrice: { grossFormattedText: string; gross: number };
}

// Booking types
export interface Booking {
  id: string;
  code: string;
  state: string;
  isComplete: boolean;
  paymentState: "REQUIRED" | "NOT_REQUIRED";
  canCommit?: boolean;
  leadPassengerName?: string;
  voucherUrl?: string;
}

export interface BookingQuestion {
  id: string;
  label: string;
  type: string;
  dataType: string;
  dataFormat?: string;
  answerValue?: string;
  isRequired: boolean;
  autoCompleteValue?: string;
  availableOptions?: { label: string; value: string }[];
  level: "booking" | "availability" | "person";
  personId?: string;
  personLabel?: string;
  availId?: string;
}

export interface PaymentIntent {
  provider: string;
  paymentIntentId: string;
  clientSecret: string;
  apiKey: string;
  amount: number;
  currency: string;
  currencyPrecision: number;
}
