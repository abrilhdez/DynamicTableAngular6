import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { PersonValidatorService } from "./services/person-validator.service";
import { ValidatorService } from "./table/validator.service";
import { DefaultValidatorService } from "./table/default-validator.service";

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    PersonValidatorService,
    ValidatorService,
    DefaultValidatorService
];
