//
//  RnLoaderManager.m
//  AwesomeProject
//
//  Created by ice on 2020/7/14.
//

#import "modul3ViewController.h"

@interface modul3ViewController()

@end

@implementation modul3ViewController

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
