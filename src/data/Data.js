export const topNavigationItems = [
  {
    id: 1,
    name: "Privacy",
    type: "link",
  },
  {
    id: 2,
    name: "FAQ",
    type: "link",
  },
  {
    id: 3,
    name: "Support",
    type: "link",
  },
  {
    id: 4,
    name: "English",
    type: "dropdown",
  },
  {
    id: 5,
    name: "My account",
    type: "dropdown",
  },
];

export const sidebarMenuItems = [
  {
    id: 1,
    name: "Initiate Account Owner Authentication",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isSelected: false,
    isLink: false,
    status: "completed",
    path: "owner-authentication",
  },
  {
    id: 2,
    name: "Verify Identity of the Original FTX Account Owner",
    description:
      "To ensure the accuracy of your email address on record, please initiate the verfication process by requesting a confirmation email. Upon receipt, kindly click on the enclosed link to complete the verification.",
    isSelected: false,
    isLink: true,
    status: "completed",
    path: "confirm-email",
  },
  {
    id: 3,
    name: "KYC",
    description:
      "Complete the Know Your Customer (KYC) process to verify the identity of the original FTX account owner. This step ensures that the account is compliant with regulations and helps to verify your identity.",
    isSelected: false,
    isLink: true,
    status: "completed",
    path: "redo-kyc",
  },
  {
    id: 4,
    name: "Review Account Balance",
    description:
      "View your FTX account -- you can view your balances as of the petition Date (unless otherwise needed), and historical activity.",
    isSelected: false,
    isLink: true,
    status: "pending",
    path: "wallet",
  },
  {
    id: 5,
    name: "Submission of Electronic Proof of Claim",
    description:
      "You will be directed to the Kroll Restructuting Administration platform to confirm your balances as of the Petition Date, and, if necessary, submit an electronic proof of claim.",
    isSelected: false,
    isLink: true,
    status: "completed",
    path: "kroll-portal",
  },
  {
    id: 6,
    name: "Standby for Next Steps",
    description: "",
    isSelected: false,
    isLink: false,
    status: "locked",
    path: "",
  },
];

export const kycData = [
  {
    id: 1,
    name: "Not Started",
    description: "Please click the link to begin the KYC process.",
    status: "not-started",
  },
  {
    id: 2,
    name: "Verified",
    description:
      "Your documents have been prepared and completed. If any additional information is required, a memeber of the FTX KYC Support team will reach out.",
    status: "verified",
  },
  {
    id: 3,
    name: "Unverified",
    description:
      "Your application failed KYC/AML checks and your clain is currently Unverified.",
    status: "pending",
  },
  {
    id: 4,
    name: "Processing",
    description:
      "Your application is currently under review, please check back shortly.",
    status: "pending",
  },
  {
    id: 5,
    name: "On Hold",
    description:
      "Your documents have been processed and are currently on hold. If any additional information is required, a memeber of the FTX KYC Support team will reach out.",
    status: "pending",
  },
  {
    id: 6,
    name: "Documents Requested",
    description:
      "Please click the link to return to the KYC platform to upload additional requested documentation.",
    status: "error",
  },
];

export const claimsStatusData = [
  {
    id: 1,
    name: "Not Started",
    description: "Please click the link to begin the claims process.",
    status: "not-started",
  },
  {
    id: 2,
    name: "Claims(s) Submitted",
    description:
      "Customers who have submitted a proof of claim via the Kroll portal. Customer who filed proofs of claim without logging in through the FTX portal will not see the status reflected herein.",
    status: "pending",
  },
  {
    id: 3,
    name: "Agreed Scheduled Claim(s)",
    description:
      "Customers who have agreed with the amounts or quantities set forth on the Debtor's Schedules as amended on June 27, 2023 via the Kroll portal and the schedule is not noted as contingent, disputed, and/or unliquidated.",
    status: "verified",
  },

  {
    id: 4,
    name: "Needs Attention",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    status: "error",
  },
];

export const balancesData = [
  {
    id: 1,
    name: "USD Tether (USDT)",
    allSubaccountsBalance: "0.00",
    subaccountBalance: "0.00",
  },
  {
    id: 2,
    name: "Bitcoin (BTC)",
    allSubaccountsBalance: "0.43647915",
    subaccountBalance: "0.43647915",
  },
  {
    id: 3,
    name: "Binance Coin (BNB)",
    allSubaccountsBalance: "1.08820898",
    subaccountBalance: "1.08820898",
  },
  {
    id: 4,
    name: "TRON (TRX)",
    allSubaccountsBalance: "1",
    subaccountBalance: "1",
  },
];

export const depositsData = [
  {
    id: 1,
    time: "11/9/2022, 3:10:46 PM",
    coin: "TRX",
    amount: "1 TRX",
    status: "Complete",
    statusId: null,
  },
  {
    id: 2,
    time: "11/9/2022, 3:10:46 PM",
    coin: "USDT",
    amount: "230.87 USDT",
    status: "Confirmed",
    statusId: "0frd6584v6sd4vd6f88vdv496fv4dv469f496",
  },
  {
    id: 3,
    time: "11/9/2022, 3:10:46 PM",
    coin: "BTC",
    amount: "0.037461 BTC",
    status: "Confirmed",
    statusId: "0frd6584v6sd4vd6f88vdv496fv4dv469f496",
  },
  {
    id: 4,
    time: "11/9/2022, 3:10:46 PM",
    coin: "BTC",
    amount: "0.214487 BTC",
    status: "Confirmed",
    statusId: "0frd6584v6sd4vd6f88vdv496fv4dv469f496",
  },
  {
    id: 5,
    time: "11/9/2022, 3:10:46 PM",
    coin: "BTC",
    amount: "0.00000949 BTC",
    status: "Confirmed",
    statusId: "0frd6584v6sd4vd6f88vdv496fv4dv469f496",
  },
  {
    id: 6,
    time: "11/9/2022, 3:10:46 PM",
    coin: "BNB",
    amount: "1.04587181 BNB",
    status: "Confirmed",
    statusId: "0frd6584v6sd4vd6f88vdv496fv4dv469f496",
  },
  {
    id: 7,
    time: "11/9/2022, 3:10:46 PM",
    coin: "BNB",
    amount: "0.00051363 BNB",
    status: "Confirmed",
    statusId: "0frd6584v6sd4vd6f88vdv496fv4dv469f496",
  },
  {
    id: 8,
    time: "11/9/2022, 3:10:46 PM",
    coin: "BTC",
    amount: "0.15669 BTC",
    status: "Confirmed",
    statusId: "0frd6584v6sd4vd6f88vdv496fv4dv469f496",
  },
];

export const FTXAppEarnData = [
  {
    id: 1,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 2,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 3,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 4,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 5,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 6,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 7,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 8,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 9,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 10,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 11,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
  {
    id: 12,
    time: "11/9/2022, 3:10:46 PM",
    currency: "TRX",
    size: "0.00000399 BTC",
    sizeUSD: "0.06479076",
  },
];
