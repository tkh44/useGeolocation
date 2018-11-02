interface Coordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
}

interface Position {
    readonly coords: Coordinates;
    readonly timestamp: number;
}

interface PositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
}

interface GeolocationState {
    fetching: boolean;
    error: PositionError | undefined;
    position: Position | undefined;
}

export default function useGeolocation(): GeolocationState;
