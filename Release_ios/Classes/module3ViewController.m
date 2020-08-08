//
//  RnLoaderManager.m
//  AwesomeProject
//
//  Created by ice on 2020/7/14.
//

#import "module3ViewController.h"
#import "RCTRootViewEx.h"
#import "RCTBridgeEx.h"
#import "NSBundle+Load.h"
#import "RCTBundleURLProviderEx.h"

@interface module3ViewController()

@end

@implementation module3ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    [self.navigationController setNavigationBarHidden:false];
}

- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    [self.navigationController setNavigationBarHidden:true];
}

- (NSString *)getModuleName {
    return @"VVRNBusinessModule";
}

- (Class)targetClass {
    return [self class];
}

@end
