// ─── Product Discovery ───
export const PRODUCT_DISCOVERY = `
  query ProductDiscovery(
    $where: ProductDiscoveryWhere
    $when: ProductDiscoveryWhen
    $who: ProductDiscoveryWho
    $what: ProductDiscoveryWhat
    $seenProductIdList: [ID!]
    $count: Int
  ) {
    productDiscovery(
      where: $where
      when: $when
      who: $who
      what: $what
    ) {
      selectedDestination { id name }
      recommendedDestinationList { nodes { id name } }
      recommendedTagList { nodes { id name } }
      recommendedSearchTermList(maxCount: 10) { nodes { searchTerm } }
      recommendedProductList(seenProductIdList: $seenProductIdList, count: $count) {
        nodes {
          id
          name
          description
          reviewCount
          reviewRating
          maxDuration
          holibobGuidePrice {
            gross
            grossFormattedText
            currency
          }
          geoCoordinate { latitude longitude }
          imageList { id url type }
        }
      }
    }
  }
`;

// ─── Product Detail ───
export const GET_PRODUCT = `
  query GetProduct($id: String!) {
    product(id: $id) {
      id
      name
      description
      guidePriceFormattedText
      guidePrice
      guidePriceCurrency
      minDuration
      maxDuration
      reviewCount
      reviewRating
      reviewList(pageSize: 10) {
        recordCount
        nodes {
          id authorName rating title content publishedDate
        }
      }
      contentList {
        nodes {
          type name description descriptionHtml ordinalPosition
        }
      }
      imageList { id url type }
      categoryList { nodes { id name } }
      geoCoordinate { latitude longitude }
      place { cityName countryName }
    }
  }
`;

// ─── Availability List (Step 1) ───
export const AVAILABILITY_LIST = `
  query AvailabilityList(
    $productId: String!
    $sessionId: ID
    $optionList: [AvailabilityListOptionListItemInput]
  ) {
    availabilityList(
      productId: $productId
      sessionId: $sessionId
      optionList: $optionList
    ) {
      sessionId
      nodes { id date guidePriceFormattedText }
      optionList {
        nodes { id label value required type dataType }
      }
    }
  }
`;

// ─── Availability Options (Step 2) ───
export const AVAILABILITY_OPTIONS = `
  query AvailabilityOptions($availabilityId: String!, $input: AvailabilityInput) {
    availability(id: $availabilityId, input: $input) {
      id
      optionList {
        isComplete
        nodes {
          id label dataType dataFormat
          availableOptions { label value }
          answerValue answerFormattedText
        }
      }
    }
  }
`;

// ─── Availability Pricing (Step 3) ───
export const AVAILABILITY_PRICING = `
  query AvailabilityPricing($availabilityId: String!, $input: AvailabilityInput) {
    availability(id: $availabilityId, input: $input) {
      id
      maxParticipants
      minParticipants
      totalPrice { grossFormattedText gross }
      isValid
      pricingCategoryList {
        nodes {
          id label
          minParticipants maxParticipants
          units
          unitPrice { grossFormattedText gross }
          totalPrice { grossFormattedText gross }
        }
      }
    }
  }
`;

// ─── Booking Create (Step 4) ───
export const BOOKING_CREATE = `
  mutation BookingCreate($input: BookingCreateInput) {
    bookingCreate(input: $input) {
      id code state isComplete paymentState
    }
  }
`;

// ─── Booking Add Availability (Step 5) ───
export const BOOKING_ADD_AVAILABILITY = `
  mutation BookingAddAvailability($input: BookingAddAvailabilityInputType!) {
    bookingAddAvailability(input: $input) {
      isComplete
    }
  }
`;

// ─── Booking Questions (Step 6) ───
export const BOOKING_QUESTIONS = `
  query BookingQuestions($bookingId: String!, $input: BookingInput) {
    booking(id: $bookingId, input: $input) {
      id code leadPassengerName state paymentState canCommit
      questionList {
        nodes {
          id label type dataType dataFormat answerValue isRequired autoCompleteValue
          availableOptions { label value }
        }
      }
      availabilityList {
        nodes {
          id date
          product { id name }
          questionList {
            nodes {
              id label type dataType dataFormat answerValue isRequired
              availableOptions { label value }
            }
          }
          personList {
            nodes {
              id pricingCategoryLabel isQuestionsComplete
              questionList {
                nodes {
                  id label type dataType dataFormat answerValue isRequired autoCompleteValue
                  availableOptions { label value }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// ─── Booking Commit (Step 7) ───
export const BOOKING_COMMIT = `
  mutation BookingCommit($bookingSelector: BookingSelector!) {
    bookingCommit(bookingSelector: $bookingSelector) {
      code state voucherUrl
    }
  }
`;

// ─── Booking Status ───
export const BOOKING_STATUS = `
  query BookingStatus($bookingId: String!) {
    booking(id: $bookingId) {
      id code state voucherUrl
    }
  }
`;

// ─── Payment Intent ───
export const PAYMENT_INTENT = `
  query PaymentIntent($bookingSelector: BookingSelector!) {
    paymentIntent(bookingSelector: $bookingSelector) {
      ... on PaymentIntentStripe {
        provider paymentIntentId clientSecret apiKey
        amount currency currencyPrecision createdAt
      }
    }
  }
`;
