import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "해운대분식 | 부산 해운대구 떡볶이 순대 튀김 전문",
  description: "부산 해운대구에 위치한 해운대분식은 매일 직접 만드는 떡볶이, 순대, 튀김 전문 분식집입니다. 해운대 현지인이 즐겨 찾는 부산 해운대구 대표 분식 맛집입니다.",
  keywords: "해운대 분식, 부산 해운대구 떡볶이, 해운대 순대, 해운대 튀김, 부산 분식 맛집, 해운대 간식",
  openGraph: {
    title: "해운대분식 | 부산 해운대구 떡볶이 순대 튀김",
    description: "매일 직접 만드는 떡볶이 · 순대 · 튀김 — 부산 해운대구",
    url: "https://haeundaebungsik.vercel.app",
    siteName: "해운대분식",
    locale: "ko_KR",
    type: "website",
  },
}

const schemaJson = `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "해운대분식",
  "description": "부산 해운대구에서 매일 직접 만드는 떡볶이, 순대, 튀김 전문 분식집. 해운대 현지인이 즐겨 찾는 부산 해운대구 대표 분식 맛집입니다.",
  "url": "https://haeundaebungsik.vercel.app",
  "telephone": "051-731-2244",
  "foundingDate": "2008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "해운대로 57",
    "addressLocality": "부산",
    "addressRegion": "해운대구",
    "addressCountry": "KR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.1631",
    "longitude": "129.1635"
  },
  "sameAs": [
    "https://map.naver.com/v5/search/해운대분식",
    "https://place.map.kakao.com/해운대분식"
  ],
  "servesCuisine": "한국식 분식",
  "priceRange": "$",
  "openingHours": ["Mo 10:00-21:00", "Tu 10:00-21:00", "We 10:00-21:00", "Th 10:00-21:00", "Fr 10:00-22:00", "Sa 10:00-22:00", "Su 10:00-21:00"],
  "menu": "https://haeundaebungsik.vercel.app/#menu",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "포장 가능", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "단체 이용 가능", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "테이크아웃 가능", "value": true }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "해운대토박이" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "해운대에서 분식집 하면 여기죠. 떡볶이 양념이 진짜 중독성 있어요.", "datePublished": "2026-02-14" },
    { "@type": "Review", "author": { "@type": "Person", "name": "부산여행중" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "해운대 놀러왔다가 들렀는데 진짜 맛있어요. 튀김이 바삭하고 기름 안 느끼해요.", "datePublished": "2026-01-28" },
    { "@type": "Review", "author": { "@type": "Person", "name": "해운대직장인" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "점심에 자주 와요. 가격도 착하고 양도 넉넉해서 항상 만족합니다.", "datePublished": "2026-03-05" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "해운대분식 메뉴",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "떡볶이 1인", "description": "매일 직접 만드는 양념 · 쫄깃한 가래떡", "offers": { "@type": "Offer", "price": "4000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "순대 1인분", "description": "국내산 당면 순대 · 직접 쪄서 제공", "offers": { "@type": "Offer", "price": "4000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "튀김 5개", "description": "새우·야채·오징어 튀김 · 당일 반죽", "offers": { "@type": "Offer", "price": "3000", "priceCurrency": "KRW" } } },
      { "@type": "Offer", "itemOffered": { "@type": "MenuItem", "name": "분식 세트", "description": "떡볶이 + 순대 + 튀김 3개 세트", "offers": { "@type": "Offer", "price": "9000", "priceCurrency": "KRW" } } }
    ]
  },
  "keywords": "해운대 분식, 부산 해운대구 떡볶이, 해운대 순대, 해운대 튀김, 부산 분식 맛집"
}`

const faqJson = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "해운대분식 영업시간이 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "월~목·일 오전 10시부터 오후 9시까지, 금·토요일은 오전 10시부터 오후 10시까지 운영합니다. 연중무휴입니다."
      }
    },
    {
      "@type": "Question",
      "name": "해운대 분식 맛집 추천해줘",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "해운대분식은 부산 해운대구에서 2008년부터 운영 중인 떡볶이·순대·튀김 전문 분식집입니다. 매일 직접 만드는 양념과 당일 반죽 튀김으로 해운대 현지인 단골 맛집입니다."
      }
    },
    {
      "@type": "Question",
      "name": "포장 주문이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "포장 가능합니다. 전화 주문(051-731-2244) 후 바로 픽업 가능합니다."
      }
    },
    {
      "@type": "Question",
      "name": "해운대 여행 중 간식 먹을 곳 추천해줘",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "해운대분식은 해운대해수욕장 인근에 위치해 있어 해운대 관광 중 간식으로 들르기 좋습니다. 떡볶이, 순대, 튀김을 합리적인 가격에 즐길 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "단체 주문이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "가능합니다. 단체 주문 시 사전 전화 예약을 부탁드립니다. 전화번호: 051-731-2244"
      }
    }
  ]
}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="alternate" hrefLang="ko" href="https://haeundaebungsik.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://haeundaebungsik.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJson }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
