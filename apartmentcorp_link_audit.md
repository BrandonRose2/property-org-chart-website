# ApartmentCorp.com Property Website Audit

Source reviewed: `https://apartmentcorp.com/portfolio` on 2026-09-08.

The public portfolio page exposes **42 properties** and individual “View Listing” destinations. The first public review confirms matching active directory records for Arbor Crest, Gates on Manhattan, River Garden, Grace Townhomes, Walnut Hill, Yorkshire/Windsor Village, Pirates Bend, Howell Place, River Pointe, Grove Park Terrace, Boca Ciega, Opa Locka, Macedonia, Riverchase, Marrero 3, St. Charles Place, Columbia Village, Forest View, Oak Hills, Pacific Pointe, Granite Ridge, Lexington Arms, and Breckenridge Village.

The page HTML has been saved at `/home/ubuntu/upload/apartmentcorp.com_portfolio_1788900805326.html`. The link destinations are generated dynamically in the site bundle, so they will be extracted and matched only where the property identity is unambiguous.

## Extracted Link Results

The public portfolio bundle contains **42** property records and **27** external links. Most external links are marketplace or directory listings, rather than official community sites. The following first-party/community domains are high-confidence candidates after matching by property name and address/unit data:

| Directory property | Public portfolio website | Matching basis |
|---|---|---|
| Arbor Crest | `https://arborcrestresidence.com/` | Exact name and Quincy, FL address |
| Gates on Manhattan | `https://www.thegatesonmanhattan.com` | Exact name and Harvey, LA address |
| River Garden | `https://www.rivergardenestates.com` | Same name family and 123-unit record |
| Grace Townhomes | `https://gracetownhouses.com/` | Exact name and Ennis, TX address |
| Windsor / Yorkshire Village | `https://windsorhousingapts.com` | Same combined community and Shreveport, LA address |
| River Pointe | `https://www.riverpointeresidence.com` | Exact name and Columbus, OH address; replaces an older existing site URL |

The public Walnut Hill record is in Petersburg, VA whereas the current directory’s Walnut Hill record is in Natchez, MS, so its link is intentionally excluded. The public Riverchase destination resolves to a Dover, DE listing rather than the Augusta, GA community, so it is excluded. Marketplace/listing links are retained only where a corresponding directory record does not already have one.

## Verified Community Websites

The six first-party/community websites were opened and reviewed. Each confirms its community name and matching location/address (or, for River Garden, matching 123-home community identity) and is approved for the directory’s **Official Site** button:

| Property | Verified official website |
|---|---|
| Arbor Crest | `https://arborcrestresidence.com/` |
| Gates on Manhattan | `https://www.thegatesonmanhattan.com` |
| River Garden | `https://www.rivergardenestates.com` |
| Grace Townhomes | `https://gracetownhouses.com/` |
| Windsor / Yorkshire Village | `https://windsorhousingapts.com` |
| River Pointe | `https://www.riverpointeresidence.com` |

## Directory Match Decisions

| Directory property | Destination | Button type | Decision |
|---|---|---|---|
| Arbor Crest | `https://arborcrestresidence.com/` | Official Site | Add |
| Gates on Manhattan | `https://www.thegatesonmanhattan.com` | Official Site | Add |
| River Garden | `https://www.rivergardenestates.com` | Official Site | Add |
| Grace Townhomes | `https://gracetownhouses.com/` | Official Site | Add |
| Windsor / Yorkshire Village | `https://windsorhousingapts.com` | Official Site | Add |
| River Pointe | `https://www.riverpointeresidence.com` | Official Site | Replace older URL |
| Coral Village | `https://www.apartments.com/coral-village-apartments-cape-coral-fl/06r9n60/` | View Listing | Add |
| Ruby Diamond | `https://www.apartments.com/diamond-homes-marrero-la/x3prmwp/` | View Listing | Add |
| Granite Bayou | `https://www.apartments.com/bayou-pointe-subdivision-shreveport-la/qbqqnyw/` | View Listing | Add |
| Pelican Bay | `https://www.apartments.com/pelican-bay-baton-rouge-la/xcl4ckp/` | View Listing | Update to portfolio source |
| Crossroads of Lee Summit | `https://www.apartments.com/crossroads-of-lees-summit-lees-summit-mo/6nvbher/` | View Listing | Add |
