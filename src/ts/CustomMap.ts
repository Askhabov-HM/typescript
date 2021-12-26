export interface Mappable {
    location: {
        lat: number,
        lng: number,
    },
    getContent(): string

}

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(mapDivId: string){
        const mapDOMElement = document.getElementById(mapDivId);
        const mapSettings = {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        }
        this.googleMap = new google.maps.Map(mapDOMElement,mapSettings);
    }

    addMarker(marker: Mappable): void {
        const newMarker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        });
        console.log(marker)
        const newInfoWindow = new google.maps.InfoWindow({
            content: marker.getContent()
        })

        newMarker.addListener('click', () => {
            newInfoWindow.open({
                anchor: newMarker,
                shouldFocus: false,
                map: this.googleMap
            })
        });
    }
}