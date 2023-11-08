const HowYouCanHelp = () => {
  return (
    <div className=" max-w-7xl mx-auto my-24">
      <h2 className=" text-4xl text-blue-600 text-center font-semibold ">
        How You Can Help
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="hero h-96 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://equineatsf.org/wp-content/uploads/2020/10/volunteer-opportunities.jpg"
              className="max-w-sm rounded-lg shadow-2xl w-96 h-44"
            />
            <div>
              <h1 className="text-4xl font-bold">Volunteer Opportunities!</h1>
            </div>
          </div>
        </div>

        <div className="hero h-96 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhVbX_zsWzCOMgNOJbActu5VR8p5kuoxoUw&usqp=CAU"
              className="max-w-sm rounded-lg shadow-2xl w-96 h-44"
            />
            <div>
              <h1 className="text-4xl font-bold">Donation Information</h1>
            </div>
          </div>
        </div>

        <div className="hero h-96 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://www.harvesters.org/wp-content/uploads/2021/09/Spread-The-Word.jpg"
              className="max-w-sm rounded-lg shadow-2xl w-96 h-44"
            />
            <div>
              <h1 className="text-4xl font-bold">Spread the Word</h1>
            </div>
          </div>
        </div>

        <div className="hero h-96 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://cf.ltkcdn.net/charity/images/orig/254503-1600x1030-how-organize-food-drive.jpg"
              className="max-w-sm rounded-lg shadow-2xl w-96 h-44"
            />
            <div>
              <h1 className="text-4xl font-bold">Fundraising Initiatives</h1>
            </div>
          </div>
        </div>

        <div className="hero h-96 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://149363561.v2.pressablecdn.com/wp-content/uploads/foodbankst-group-of-volunteers-standing-outside-of-a-mobile-food-pantry-truck.jpg"
              className="max-w-sm rounded-lg shadow-2xl w-96 h-44"
            />
            <div>
              <h1 className="text-4xl font-bold">Become a Partner</h1>
            </div>
          </div>
        </div>

        <div className="hero h-96 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://www.unitedfoodbank.org/wp-content/uploads/2022/11/IMG_8390-scaled.jpg"
              className="max-w-sm rounded-lg shadow-2xl w-96 h-44"
            />
            <div>
              <h1 className="text-4xl font-bold">Community Events</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowYouCanHelp;
