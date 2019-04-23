getResourcesPark();
{
  fetch(
    "https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=dqz4K6UvNyJxLC8XNBDcqdr4s",
    { Authorization: { Gruntworks: `${burakKey}` } }
  ).then(parkDataBox => parkDataBox.json());
}

/*User Input fetch{
    return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=dqz4K6UvNyJxLC8XNBDcqdr4s&${parkSearchUserInput}=Yes`,
    {Authorization: {Gruntworks: "dqz4K6UvNyJxLC8XNBDcqdr4s"}})
    .then(parkDataContainer => parkDataContainer.json());
*/
