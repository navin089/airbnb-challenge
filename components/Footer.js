import 
{ 
    GlobeAltIcon,
    SearchIcon,
    MenuIcon,
    CurrencyRupeeIcon

} from '@heroicons/react/solid';

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works?</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Diversity & Belonging</p>
          <p>Accessibility</p>
          <p>Airbnb Associates</p>
          <p>Host Afghan refugees</p>
          <p>Guest Referrals</p>
          <p>Airbnb.org</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Host your home</p>
          <p>Host an Online Experience</p>
          <p>Host an Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
          <p>Community Centre</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Our COVID-19 Response</p>
          <p>Help Centre</p>
          <p>Cancellation options</p>
          <p>Neighbourhood Support</p>
          <p>Trust & Safety</p>
        </div>
      </div>

      <div className="text-sm flex items-center justify-between px-32 py-6 border border-t-2">
          <div className="flex space-x-2 items-center">
              <p>&copy;2021 Airbnb, Inc.</p> 
              <p>Privacy</p>
              <p>Terms</p>
              <p>Sitemap</p>
              <p>Company Details</p>
          </div>

          <div className="flex space-x-3">
              <p className="flex space-x-1 underline">
                  <GlobeAltIcon className="h-5 w-5"/>
                  <span>English(IN)</span>
              </p>
              <p className="flex space-x-1 underline">
                  <CurrencyRupeeIcon className="h-5 w-5"/>
                  <span>INR</span>
              </p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
