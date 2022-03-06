import { ModuleWithProviders, NgModule } from "@angular/core";

@NgModule()
export class ApiModule {
    static forRoot(options:any):ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule
        }
    }
}
