import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import MetricSagas from "./Metric";

export default [...ApiErrors, ...WeatherSagas, ...MetricSagas];
