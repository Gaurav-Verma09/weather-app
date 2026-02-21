import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {

    let COLD_URL="https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    let HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {" "}
                        {info.humidity > 80 ?(
                         <ThunderstormIcon/> 
                        ): info.temp>15 
                        ? (<SunnyIcon/>
                        ): (<AcUnitIcon/>
                        )}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp={info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C 
                        </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}